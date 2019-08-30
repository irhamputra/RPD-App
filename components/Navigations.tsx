import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Chat from "../screens/Chat";
import Home from "../screens/Home";
import LogoTitle from "./LogoTitle";
import AvatarHeader from "./AvatarHeader";

const TabNavigator = createBottomTabNavigator({
  Home,
  Chat
});

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      headerLeft: <LogoTitle />,
      headerRight: <AvatarHeader/>
    }
  }
});

export const AppContainer = createAppContainer(StackNavigator);
