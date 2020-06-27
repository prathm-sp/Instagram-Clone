import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "./src/screens/Feed";
import Explore from "./src/screens/Explore";
import Notifs from "./src/screens/Notifications";
import Profile from "./src/screens/Profile";
import Notifications from "./src/screens/Notifications";
import Story from "./src/screens/Story";
import Dm from "./src/screens/Dm";
import Comments from "./src/screens/Comments";
import Posts from "./src/screens/Posts";
import store from "./src/core/store";
import { Ionicons } from "@expo/vector-icons";

const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
const StackNavigator = createStackNavigator();

// --bottomNavScreen ( Feed ) 
//     --Stack
//       --Screen
//       --Screen
//       --Screen 
//     --Stack
//       --Screen 
// --bottomNavScreen ( Explore ) 
//   --Stack 
//     --Screen
//     --Screen

export default function App() {
  const FeedTabs = () => {
    return (
      <MaterialTopTabs.Navigator tabBar={() => null}>
        <MaterialTopTabs.Screen
          name="FeedStack"
          children={() => (
            <StackNavigator.Navigator>
              <StackNavigator.Screen name="Feed" component={Feed} />
              <StackNavigator.Screen name="Story" component={Story} />
              <StackNavigator.Screen name="Comments" component={Comments} />
            </StackNavigator.Navigator>
          )}
        />
        <MaterialTopTabs.Screen
          name="Dm"
          children={() => (
            <StackNavigator.Navigator>
              <StackNavigator.Screen name="Dm" component={Dm} />
            </StackNavigator.Navigator>
          )}
        />
      </MaterialTopTabs.Navigator>
    );
  };

  const ExploreStack = () => {
    return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Explore" component={Explore} />
        <StackNavigator.Screen name="Posts" component={Posts} />
      </StackNavigator.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MaterialBottomTabs.Navigator
          barStyle={{
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}
        >
          <MaterialBottomTabs.Screen
            name="Feed"
            children={() => FeedTabs()}
            options={{
              tabBarLabel: "",
              tabBarIcon: () => <Ionicons name="ios-home" size={34} />,
            }}
          />
          <MaterialBottomTabs.Screen
            name="Explore"
            children={ExploreStack}
            options={{
              tabBarLabel: "",
              tabBarIcon: () => <Ionicons name="ios-compass" size={34} />,
            }}
          />
          <MaterialBottomTabs.Screen
            name="Notifs"
            component={Notifications}
            options={{
              tabBarLabel: "",
              tabBarIcon: () => <Ionicons name="ios-notifications" size={34} />,
            }}
          />
          <MaterialBottomTabs.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "",
              tabBarIcon: () => <Ionicons name="ios-person" size={34} />,
            }}
          />
        </MaterialBottomTabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
