import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	show: false,
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggle(state) {
			state.show = !state.show;
		},
		setItems(state, action) {
			state.items = action.payload;
		},
		addItem(state, action) {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
			const { id, title, price } = action.payload;
			if (itemIndex === -1) {
				state.items = [...state.items, { id, title, price, quantity: 1, total: price }];
			} else {
				state.items[itemIndex].quantity += 1;
				state.items[itemIndex].total += state.items[itemIndex].price;
			}
		},
		removeItem(state, action) {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
			if (state.items[itemIndex].quantity === 1) {
				state.items = state.items.filter((item) => item.id !== action.payload.id);
			} else {
				state.items[itemIndex].quantity -= 1;
				state.items[itemIndex].total -= state.items[itemIndex].price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
