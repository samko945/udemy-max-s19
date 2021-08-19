import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.items);

	const cartItemsArray = cartItems.map((item, index) => {
		return <CartItem key={index} item={item} />;
	});
	const cartItemsList = <ul>{cartItemsArray}</ul>;
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			{cartItemsList}
			{cartItemsArray.length < 1 && <p>Your cart is empty!</p>}
		</Card>
	);
};

export default Cart;
