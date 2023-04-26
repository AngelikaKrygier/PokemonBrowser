import { configureStore } from "@reduxjs/toolkit";
import themeSwitchReducers from "../common/ThemeSwitch/themeSlice";

export const store = configureStore({
    reducer: {
        theme: themeSwitchReducers,
    },
});