import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {deleteProduct, getProduct, products as productsAPI} from "./API";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import {Button} from "@material-ui/core";
import {ToastContainer, toast, Zoom, Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {useDispatch} from "react-redux";


toast.configure();

const Modal = ({ isOpen }) => {

    const [open, setOpen] = useState(isOpen);
    const dispatch = useDispatch();
    const [style, setStyle] = useState({display: "none"});
    const [product, setProduct] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getProduct(isOpen).then(res =>
            setProduct(res)
        )
        setOpen(isOpen);
    }, [isOpen])

    const modalClose = () => {
            setProduct([]);
            history.push("/catalog")
            setOpen(false);
    }

    const handleEditProduct = (productId) => {
        history.push(`/product/${productId}`)
    }


    const warnToast = () => {
        toast.warn("Product Deleted", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000
        })
    }

    const deleteModalProduct = (id) => {
        deleteProduct(id).then(res => {
            productsAPI().then(res => {
                dispatch({
                    type: "PRODUCT_DELETED",
                    payload: res,
                });
                localStorage.setItem("products", JSON.stringify(res))
                warnToast()
            })
            history.push("/catalog")
        })
    }

    return (
        <>
            {open && <div className="modal-backdrop" >
                <div key={ isOpen } className="modal-content-wrapper" >
                    <div className="modal-item__right">
                        <div className="item__info-price">
                            <ul className="price__item">
                                <li className="price__item-Rrp">
                                    <strong>$214</strong>
                                    <br />
                                    <span className="price__item-text">RRP</span>
                                </li>
                                <li className="price__item-Cost">
                                    <strong>{product.price}</strong>
                                    <br />
                                    <span className="price__item-text">COST</span>
                                </li>
                                <li className="price__item-Profit">
                                    <strong>11 %(24$)</strong>
                                    <br />
                                    <span className="price__item-text">PROFIT</span>
                                </li>
                            </ul>
                        </div>
                        <div className="modal__item-image">
                            <img className="item__image" alt="Photo.png" src={product.imageUrl} />
                        </div>
                    </div>
                    <div className="modal-item__left">
                        <div className="modal__product" >
                            <Button onClick={modalClose}>X</Button>
                        </div>
                        <h1 className="item_title">{product.title}</h1>
                        <button className="item__button"><b>Add to My Inventory</b></button>
                        <span className="modal-icons--wrapper">
                            <label className="modal-labels">Edit</label>
                            <Button
                                className="single-product__edit-icon"
                                value="edit"
                            >
                                <EditOutlinedIcon
                                    onClick={() => handleEditProduct(product.id)}
                                />
                            </Button>
                            <label className="modal-labels">Delete</label>
                            <Button
                                className="single-product__delete-icon"
                                value="delete"
                            >
                                <DeleteOutlineOutlinedIcon
                                    onClick={() => deleteModalProduct(product.id)}
                                    aria-label="delete"
                                />
                            </Button>
                        </span>
                        <span className="item_productdesc"> Product Details </span>
                        <div className="item_description">{product.description}</div>
                    </div>
                </div>
            </div>}
        </>


    );
};

export default Modal;