import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
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
  const avaliableMelas = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = avaliableMelas.filter(
    (meal: Meal) => meal.categoryIds.indexOf(id) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found, maybe check your filters</Text>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMeals;
