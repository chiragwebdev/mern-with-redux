import { createSlice } from '@reduxjs/toolkit';

export const dataapi = createSlice({
    name: "apidata",
    initialState: {
        datadi: [],
        addite: 0,
    },
    // initialState:[],

    reducers: {
        itemadd: (state, action) => {
            // state = state.addite + 1;
            state.datadi.push(action.payload)
            // alert(state.datadi.id)
        },
    }
})

export const { itemadd } = dataapi.actions;

export default dataapi.reducer
