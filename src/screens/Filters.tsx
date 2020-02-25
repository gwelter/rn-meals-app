import React from "react";
import { Text, View } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenProps } from "react-navigation-stack";
import HeaderButton from "../components/HeaderButton";

const Filters: NavigationScreenComponent<{}, NavigationStackScreenProps> = ({
  navigation
}) => {
  return (
    <View>
      <Text>Filters</Text>
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
    )
  };
};

export default Filters;
