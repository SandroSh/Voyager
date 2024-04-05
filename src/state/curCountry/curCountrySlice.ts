import { createSlice } from "@reduxjs/toolkit";
import {  CountryData} from "../../types";

interface curCountryState {
    value: CountryData | undefined;
}
const initialState:curCountryState = {
    value: undefined,
}
const curCountrySlice = createSlice({
    name: 'currentCountry',
    initialState: initialState,
    reducers: {
        setValue: (state, action:{ payload:CountryData}) => {
            
            state.value = {...action.payload};
        }
    }
})
export const {setValue} = curCountrySlice.actions;
export default curCountrySlice.reducer;