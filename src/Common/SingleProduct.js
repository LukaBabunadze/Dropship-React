import Checkbox from "../Checkbox";


const SingleProduct = ({
                           product,
                           handleOpen,
                           isChecked,
                           handleCheckProduct,

}) => {



    return (
        <div>
            <div className="catalog__item">
                <Checkbox
                    isChecked={isChecked}
                    handleCheckProduct={handleCheckProduct}
                />
                <div className="catalog__item-photo" onClick={() => handleOpen(product)}>
                    <img src={product.image}/>
                </div>
                <div className="catalog__item-name" onClick={() => handleOpen(product)}>
                    {product.title}
                </div>
                <div className="catalog__item-price" onClick={() => handleOpen(product)}>
                    {product.price}$
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;