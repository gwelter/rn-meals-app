import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";

interface Props {
  categoryId: string;
}

const CategoryMeals: NavigationStackScreenComponent<
  Props,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const id = navigation.getParam("categoryId");
  const category = CATEGORIES.find(c => c.id === id);

  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
      <Text>{category.title}</Text>
      <Button
        title="Go To MealDetails"
        onPress={() => {
          navigation.push("MealDetails");
        }}
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
