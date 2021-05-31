import Checkbox from "../Checkbox";


const SingleProduct = ({product, onChange}) => {
    return (
        <div>
            <div className="catalog__item">
                <div className="catalog__item-photo">
                    <Checkbox increment={onChange}/>
                    <img src={product.image}/>
                </div>
                <div className="catalog__item-name">
                    {product.title}
                </div>
                <div className="catalog__item-price">
                    {product.price}$
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;