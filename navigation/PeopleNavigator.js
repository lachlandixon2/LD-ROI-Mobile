import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PeopleViewScreen from "../screens/PeopleViewScreen";
import PersonViewScreen from "../screens/PersonViewScreen";
import PersonEditScreen from "../screens/PersonEditScreen";

const Stack = createStackNavigator();

export default function PeopleNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PeopleView"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        options={{ title: "View People" }}
        name="PeopleView"
        component={PeopleViewScreen}
      />
      <Stack.Screen
        options={{ title: "View Person" }}
        name="PersonView"
        component={PersonViewScreen}
      />
      <Stack.Screen
        options={{ title: "Person Edit" }}
        name="PersonEdit"
        component={PersonEditScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
