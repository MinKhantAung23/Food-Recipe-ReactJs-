
import { ApiService } from "./service/ApiService";
import favMealReducer from "./features/favMealSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        favMeal: favMealReducer,
        [ApiService.reducerPath]: ApiService.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiService.middleware),
})