import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector, useDispatch } from "react-redux";

import { sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const showCart = cart.show;

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		dispatch(sendCartData(cart));
	}, [cart, dispatch]);

	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
