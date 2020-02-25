import React from "react";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

interface Props {
  categoryId: string;
  title: string;
}

const CategoryMeals: NavigationStackScreenComponent<
  Props,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const id = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal: Meal) => meal.categoryIds.indexOf(id) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMeals.navigationOptions = ({
  navigation
}: NavigationStackScreenProps) => {
  const id = navigation.getParam("categoryId");
  const category = CATEGORIES.find(c => c.id === id);

  return {
    headerTitle: category.title
  };
};

export default CategoryMeals;
