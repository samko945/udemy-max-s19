import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		notification: {},
	},
	reducers: {
		setNotification(state, action) {
			/**
			 * action.payload = {
			 *   status
			 *   title
			 *   message
			 * }
			 */
			state.notificationState = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
