import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

export default function CategoryMeals({
  navigation
}: NavigationStackScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
      <Button
        title="Go To MealDetails"
        onPress={() => {
          navigation.push("MealDetails");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
