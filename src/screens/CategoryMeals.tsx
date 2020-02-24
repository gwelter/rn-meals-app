import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import MealItem from "../components/MealItem";
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
  function renderMealItem({ item }: ListRenderItemInfo<Meal>) {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelect={() => {
          navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: item.id
            }
          });
        }}
      />
    );
  }

  const id = navigation.getParam("categoryId");
  const title = navigation.getParam("title");

  const displayedMeals = MEALS.filter(
    (meal: Meal) => meal.categoryIds.indexOf(id) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal: Meal) => meal.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMeals;
