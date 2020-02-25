import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenProps } from "react-navigation-stack";
import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

const Categories: NavigationScreenComponent<{}, NavigationStackScreenProps> = ({
  navigation
}) => {
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

Categories.navigationOptions = ({
  navigation
}: NavigationDrawerScreenProps) => {
  return {
    headerTitle: "Meals",
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

export default Categories;
