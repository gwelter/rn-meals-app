import React, { useCallback, useEffect, useState } from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenProps } from "react-navigation-stack";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = ({
  label,
  value,
  setValue
}: {
  label: string;
  value: boolean;
  setValue: (boolean) => void;
}) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={value}
      onValueChange={setValue}
      trackColor={{
        true: Colors.primaryColor,
        false: ""
      }}
      thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
    />
  </View>
);

const Filters: NavigationScreenComponent<{}, NavigationStackScreenProps> = ({
  navigation
}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avaliable Filters / Resctrictions</Text>
      <FilterSwitch
        label="Gluten Free"
        value={isGlutenFree}
        setValue={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose Free"
        value={isLactoseFree}
        setValue={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" value={isVegan} setValue={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        setValue={setIsVegetarian}
      />
    </View>
  );
};

Filters.navigationOptions = ({ navigation }: NavigationDrawerScreenProps) => {
  return {
    headerTitle: "Filter Meals",
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10
  }
});

export default Filters;
