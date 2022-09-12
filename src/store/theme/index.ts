// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "..";

// interface Theme {
// 	pallette: {
// 		primary: string;
// 		background: {
// 			paper: string;
// 			default: string;
// 		};
// 	};
// 	spacing: number;
// }

// const initialState = {
// 	pallette: {
// 		primary: "#ff4089",
// 		background: {
// 			paper: "#fff",
// 			default: "#fff",
// 		},
// 	},
// 	spacing: 8,
// };

// export const themeSlice = createSlice({
// 	name: "theme",
// 	initialState: initialState,
// 	reducers: {
// 		createTheme: (state, action: PayloadAction<Theme>) => {
// 			state = action.payload;
// 		},
// 	},
// });

// export const { createTheme } = themeSlice.actions;
// export const selectTheme = (state: RootState) => state.theme;

// export default themeSlice.reducer;
export {};
