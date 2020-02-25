import React from "react";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

const Favorites: NavigationStackScreenComponent<
  {},
  NavigationStackScreenProps
> = ({ navigation }) => {
  const favoriteMeals = MEALS.filter(
    (meal: Meal) => meal.id === "m1" || meal.id === "m2"
  );
  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

Favorites.navigationOptions = {
  headerTitle: "Your Favorites"
};

export default Favorites;
