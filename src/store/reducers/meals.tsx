import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import { TOGGLE_FAVORITE } from "../actions/meals";

interface InitialState {
  meals: Meal[];
  filderedMeals: Meal[];
  favoriteMeals: Meal[];
}

const initialState: InitialState = {
  meals: MEALS,
  filderedMeals: MEALS,
  favoriteMeals: [] as Meal[]
};

const mealsReducer = (state: InitialState = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingFav = state.favoriteMeals.find(
        meal => meal.id === action.mealId
      );
      if (existingFav) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            meal => meal.id !== existingFav.id
          )
        };
      } else {
        const favMeal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(favMeal) };
      }
    default:
      return state;
  }
};

export default mealsReducer;
