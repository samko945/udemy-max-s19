import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.items);
	const cartItemsList = cartItems.map((item) => {
		return <CartItem item={item} />;
	});
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>{cartItemsList}</ul>
		</Card>
	);
};

export default Cart;
