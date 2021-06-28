import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";

const Modal = ({ isOpen }) => {

    const [open, setOpen] = useState(isOpen)
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${isOpen}`)
            .then(res => res.json())
            .then(response => {
                    setProduct(response)
                setOpen(isOpen)
                }
            )

    }, [isOpen])

    const modalClose = () => {
        setProduct({});
        history.push("/catalog")
        setOpen(false);
    }



    return (
        <>
            {open && <div className="modal-backdrop" onClick={modalClose}>
                <div className="modal-content-wrapper" >
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
                            <img className="item__image" alt="Photo.png" src={product.image} />
                        </div>
                    </div>
                    <div className="modal-item__left">
                        <div className="modal__product" >
                            <span className="modal__close" onClick={modalClose}>X</span>
                        </div>
                        <h1 className="item_title">{product.title}</h1>
                        <button className="item__button"><b>Add to My Inventory</b></button>
                        <span className="item_productdesc"> Product Details </span>
                        <div className="item_description">{product.description}</div>
                    </div>
                </div>
            </div>}
        </>


    );
};

export default Modal;