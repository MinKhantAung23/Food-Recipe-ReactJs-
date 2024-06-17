import { ApiService } from "../ApiService";

const recipeEndpoint = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        meals: builder.query({
            query: (arg) => `/api/json/v1/1/filter.php?c=${arg}`,
            keepUnusedDataFor: 60 * 60,
        }),
        category: builder.query({
            query: () => '/api/json/v1/1/categories.php',
            keepUnusedDataFor: 60 * 60,
        }),
        getSingleMeal: builder.query({
            query: (id) => `/api/json/v1/1/lookup.php?i=${id}`
        }),
        searchMeals: builder.query({
            query: (name) => `/api/json/v1/1/search.php?s=${name}`
        })
    })
})

export const { useMealsQuery, useCategoryQuery, useGetSingleMealQuery, useSearchMealsQuery } = recipeEndpoint;