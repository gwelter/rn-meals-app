import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.screen}>
      <Text>Favorites</Text>
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
