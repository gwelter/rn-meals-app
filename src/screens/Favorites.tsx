import React from "react";
import { NavigationScreenComponent } from "react-navigation";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenProps } from "react-navigation-stack";
import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

const Favorites: NavigationScreenComponent<{}, NavigationStackScreenProps> = ({
  navigation
}) => {
  const favoriteMeals = MEALS.filter(
    (meal: Meal) => meal.id === "m1" || meal.id === "m2"
  );
  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

Favorites.navigationOptions = ({ navigation }: NavigationDrawerScreenProps) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default Favorites;
