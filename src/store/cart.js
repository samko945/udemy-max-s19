import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	show: false,
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
			const { id, title, price } = action.payload;
			if (itemIndex === -1) {
				state.items = [...state.items, { id, title, price, quantity: 1, total: price }];
			} else {
				state.items[itemIndex].quantity += 1;
				state.items[itemIndex].total += price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
