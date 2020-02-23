import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

export default function MealDetails({
  navigation
}: NavigationStackScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>MealDetails</Text>
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
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
