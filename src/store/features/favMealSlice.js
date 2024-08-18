import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meals: JSON.parse(localStorage.getItem("meal")) || [],
    error: null,
    loading: false
}
export const favMealSlice = createSlice({
    name: 'favMeal',
    initialState,
    reducers: {
        addMeal: (state, action) => {
            const meal = action.payload;
            const existMeal = state.meals.find(meal => meal.idMeal === action.payload.idMeal);
            if (!existMeal) {
                state.meals.push(meal);
            }

            localStorage.setItem('meal', JSON.stringify(state.meals));
        },
        removeMeal: (state, action) => {
            const filterMeal = state.meals.filter(meal => meal.idMeal !== action.payload.idMeal);
            state.meals = filterMeal;
            localStorage.setItem('meal', JSON.stringify(state.meals));
        },
    }
})

export const { addMeal, removeMeal, fetchMealsFailure, fetchMealsSuccess } = favMealSlice.actions;
export default favMealSlice.reducer;