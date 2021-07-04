import {useEffect, useState} from "react";
import {cart} from "../Common/API";
import SingleProduct from "../Common/SingleProduct";

const Cart = () => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        cart()
            .then(res => {
            setCartData(res);
            console.log(cartData)
        })
    }, []);

    return(
        <>
            {
                cartData.cartItem &&
                cartData.cartItem.items.map(item =>
                    <SingleProduct
                        image={item.image}
                        title={item.title}
                        productId={item.id}
                        price={item.price}
                        qty={item.qty}
                    />)
            }
        </>
    );
};
export default Cart;