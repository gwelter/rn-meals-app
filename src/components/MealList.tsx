import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useSelector } from "react-redux";
import Meal from "../models/meal";
import MealItem from "./MealItem";

interface Props {
  listData: any[];
  navigation: StackNavigationProp;
}

export default function MealList({ listData, navigation }: Props) {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  function renderMealItem({ item }: ListRenderItemInfo<Meal>) {
    const isFavorite = favoriteMeals.some(meal => meal.id === item.id);
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
              mealId: item.id,
              mealTitle: item.title,
              isFavorite
            }
          });
        }}
      />
    );
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(meal: Meal) => meal.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
