import { configureStore } from '@reduxjs/toolkit';
import { imagesApi } from '../api/apiGatinhos';

const store = configureStore({
    reducer: {
        [imagesApi.reducerPath]: imagesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(imagesApi.middleware),
});

export default store;