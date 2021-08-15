import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	show: false,
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
