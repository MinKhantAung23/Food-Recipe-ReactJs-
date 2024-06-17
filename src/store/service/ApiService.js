import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const ApiService = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.themealdb.com/'
    }),
    endpoints: (builder) => ({}),
})