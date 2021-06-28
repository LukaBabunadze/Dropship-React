import Checkbox from "../Checkbox";


const SingleProduct = ({
                           product,
                           isChecked,
                           handleCheckProduct,

}) => {



    return (
        <div>
            <div className="catalog__item">
                <Checkbox
                    isChecked={isChecked}
                    handleCheckProduct={handleCheckProduct}
                    checked={isChecked}
                />
                <div className="catalog__item-photo" >
                    <img src={product.image}/>
                </div>
                <div className="catalog__item-name" >
                    {product.title}
                </div>
                <div className="catalog__item-price" >
                    {product.price}$
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;