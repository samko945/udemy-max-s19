import classes from "./CartButton.module.css";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
	const cartItems = useSelector((state) => state.cart.items);
	let totalCartItems = 0;
	for (const key in cartItems) {
		totalCartItems += cartItems[key].quantity;
	}

	const dispatch = useDispatch();

	function toggleCartHandler() {
		dispatch(cartActions.toggle());
	}
	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalCartItems}</span>
		</button>
	);
};

export default CartButton;
