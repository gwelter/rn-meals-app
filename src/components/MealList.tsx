import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import Meal from "../models/meal";
import MealItem from "./MealItem";

interface Props {
  listData: any[];
  navigation: StackNavigationProp;
}

export default function MealList({ listData, navigation }: Props) {
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
