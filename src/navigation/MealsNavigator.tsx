import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from "../constants/Colors";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import Favorites from "../screens/Favorites";
import Filters from "../screens/Filters";
import MealDetails from "../screens/MealDetails";

const defaultStackNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories,
    CategoryMeals,
    MealDetails
  },
  defaultStackNavigationOptions
);

const FavNavigator = createStackNavigator(
  {
    Favorites,
    MealDetails
  },
  defaultStackNavigationOptions
);

const tabsScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.accent
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsScreenConfig, {
        activeColor: "white",
        shifting: true
      })
    : createBottomTabNavigator(tabsScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent
        }
      });

const FiltersNavigators = createStackNavigator(
  { Filters },
  defaultStackNavigationOptions
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavTabNavigator: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Meals" }
    },
    Filters: FiltersNavigators
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
