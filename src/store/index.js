import { configureStore } from "react-redux";

import cartReducer from "./cart";

const store = configureStore({
	reducer: { cart: cartReducer },
});

export default store;
