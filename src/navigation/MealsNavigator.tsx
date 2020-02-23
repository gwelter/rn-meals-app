import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetails from "../screens/MealDetails";
// import Favorites from "../screens/Favorites";
// import Filters from "../screens/Filters";

const MealsNavigator = createStackNavigator({
  Categories,
  CategoryMeals,
  MealDetails
});

export default createAppContainer(MealsNavigator);
