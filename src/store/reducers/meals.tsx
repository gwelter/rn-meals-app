import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

interface InitialState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

const initialState: InitialState = {
  meals: MEALS,
  filteredMeals: MEALS,
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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
