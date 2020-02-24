import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

const Categories: NavigationStackScreenComponent<
  {},
  NavigationStackScreenProps
> = ({ navigation }) => {
  function renderGridItem({ item }: ListRenderItemInfo<Category>) {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: item.id,
              title: item.title
            }
          });
        }}
      />
    );
  }

  return (
    <FlatList
      keyExtractor={(item: Category) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

Categories.navigationOptions = {
  headerTitle: "Meals"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Categories;
