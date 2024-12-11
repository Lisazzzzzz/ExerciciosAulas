import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/slice';
export const store = configureStore({
    reducer: {
        banco: reducer, 
    },
});