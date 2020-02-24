import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

interface Props {
  mealId: string;
}

const MealDetails: NavigationStackScreenComponent<
  Props,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal: Meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Go back to top"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetails.navigationOptions = ({
  navigation
}: NavigationStackScreenProps) => {
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal: Meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetails;
