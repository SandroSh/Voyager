import { createSlice } from "@reduxjs/toolkit";
import { CountryData } from "../../types";
import { loadState, saveState } from "../sessionStorage";

const sessionKey = "CountryData";

interface curCountryState {
  value: CountryData | undefined;
}
const initialState: curCountryState = {
  value: loadState(sessionKey, undefined),
};
const curCountrySlice = createSlice({
  name: "currentCountry",
  initialState: initialState,
  reducers: {
    setValue: (state, action: { payload: CountryData | undefined }) => {
      if (action.payload) {
        state.value = { ...action.payload };
        saveState(sessionKey, { ...action.payload });
      }else{
        state.value = undefined;
        saveState(sessionKey,undefined);
      }
    },
  },
});
export const { setValue } = curCountrySlice.actions;
export default curCountrySlice.reducer;
