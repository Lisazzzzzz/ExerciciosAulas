import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'live_cSJ9mBVVNPXvwpsmVFldFr4H509ZBVFbb6iLRSBnFPlBhW9IdRVmrg8cfLMBAuRO';

export const imagesApi = createApi({
    reducerPath: 'imagesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thecatapi.com/v1/',
    }),
    endpoints: (builder) => ({
        fetchImages: builder.query({
            query: ({ page = 1, limit = 5, order = 'asc' }) => ({
                url: 'images/search',
                params: { limit, page, order, api_key: API_KEY },
            }),
            transformResponse: (response) => ({
                images: response,
                totalPages: 100, 
            }),
        }),
    }),
});

export const { useFetchImagesQuery } = imagesApi;
