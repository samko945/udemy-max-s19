import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
	return async (dispatch) => {
		try {
			const response = await fetch("https://udemy-max-s19-default-rtdb.firebaseio.com/cart.json");

			if (!response.ok) {
				throw new Error("There was an error fetching data.");
			}

			const data = (await response.json()) || { items: [] };

			dispatch(cartActions.setItems(data.items));
		} catch (err) {
			dispatch(
				uiActions.setNotification({
					status: "error",
					title: "Error",
					message: "Cannot get cart data.",
				})
			);
		}
	};
};

export const sendCartData = (cartData) => {
	return async (dispatch) => {
		dispatch(
			uiActions.setNotification({
				status: "pending",
				title: "Sending...",
				message: "Sending cart data.",
			})
		);

		try {
			const response = await fetch("https://udemy-max-s19-default-rtdb.firebaseio.com/cart.json", {
				method: "PUT",
				body: JSON.stringify({ items: cartData.items }),
			});

			if (!response.ok) {
				throw new Error("There was a problem sending cart data.");
			}

			dispatch(
				uiActions.setNotification({
					status: "success",
					title: "Success!",
					message: "Cart data sent successfully!",
				})
			);
		} catch (err) {
			dispatch(
				uiActions.setNotification({
					status: "error",
					title: "Error",
					message: "Cannot send cart data.",
				})
			);
		}
	};
};
