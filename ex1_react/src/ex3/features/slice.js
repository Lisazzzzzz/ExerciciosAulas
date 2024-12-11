import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'banco',
    initialState: { saldo: 0 },
    reducers: {
        depositar: (state, action) => {
            state.saldo += action.payload; 
        },
        levantar: (state, action) => {
            if (state.saldo >= action.payload) {
                state.saldo -= action.payload; 
            } else {
                alert('Saldo insuficiente para fazeres o movimento!');
            }
        },
    },
});


export const { depositar, levantar } = slice.actions;


export default slice.reducer;
