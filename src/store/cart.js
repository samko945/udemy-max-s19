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
			const itemIndex = state.items.findIndex((item) => item.id === action.payload);
			if (itemIndex === -1) {
				state.items = [...state.items, { id: action.payload, quantity: 1 }];
			} else {
				state.items[itemIndex].quantity += 1;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
