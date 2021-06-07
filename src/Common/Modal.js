const Modal = ({modalData, handleClose}) => {
    return (
        <div className="modal-backdrop">
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
                                <strong>{modalData.price}</strong>
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
                        <img className="item__image" alt="Photo.png" src={modalData.image} />
                    </div>
                </div>
                <div className="modal-item__left">
                    <div className="modal__product" >
                        <span className="modal__close" onClick={handleClose}>X</span>
                    </div>
                    <h1 className="item_title">{modalData.title}</h1>
                    <button className="item__button"><b>Add to My Inventory</b></button>
                    <span className="item_productdesc"> Product Details </span>
                    <div className="item_description">{modalData.description}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;