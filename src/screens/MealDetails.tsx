import React, { useCallback, useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import { useDispatch, useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import Meal from "../models/meal";
import { toggleFavorite } from "../store/actions/meals";

interface Props {
  mealId: string;
  mealTitle: string;
  isFavorite: boolean;
  toggleFav: () => void;
}

const ListItem = props => (
  <View style={styles.listItem}>
    <Text>{props.children}</Text>
  </View>
);

const MealDetails: NavigationStackScreenComponent<
  Props,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const availableMeals = useSelector(state => state.meals.meals);
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(favMeal => favMeal.id === mealId)
  );
  const selectedMeal = availableMeals.find((meal: Meal) => meal.id === mealId);
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({
      toggleFav: toggleFavoriteHandler
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({
      isFavorite: currentMealIsFavorite
    });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingreditens.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
      <View style={styles.screen}>
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
    </ScrollView>
  );
};

MealDetails.navigationOptions = ({
  navigation
}: NavigationStackScreenProps<Props>) => {
  const mealTitle = navigation.getParam("mealTitle");
  const isFavorite = navigation.getParam("isFavorite");
  const toggleFav = navigation.getParam("toggleFav");
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center"
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetails;
