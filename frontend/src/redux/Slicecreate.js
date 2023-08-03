import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     showcount: 0,
// }
export const customslice = createSlice({
    name: 'first',
    initialState : {
        showcount: 0,
    },
    reducers: {
        add: (state) => {
            state.showcount = state.showcount + 1;
        },
        min: (state) => {
            if (state.showcount > 0){
                state.showcount = state.showcount - 1;
            }
        }
    }
})

export const { add, min } = customslice.actions;

export default customslice.reducer;