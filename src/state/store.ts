import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Search/searchSlice";
import currentCountryReducer from "./curCountry/curCountrySlice";
export const store = configureStore({
    reducer:{
        search:searchReducer,
        currentCountry:currentCountryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
