import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    value: string;
}
const initialState: SearchState = {
    value: ""
}

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setValue: (state, actions) => {
            state.value = actions.payload;
        }
    }
})
export const {setValue} = searchSlice.actions;
export default searchSlice.reducer;