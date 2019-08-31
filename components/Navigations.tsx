import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";
import Chat from "../screens/Chat";
import Home from "../screens/Home";
import LogoTitle from "./LogoTitle";
import AvatarHeader from "./AvatarHeader";
import Schedules from "../screens/Schedules";
import Podcast from "../screens/Podcast";

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Chat,
    Program: Schedules,
    Podcast
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === "Home") {
          iconName = "home"
        } else if (routeName === "Chat") {
          iconName = "chat"
        } else if (routeName === "Program") {
          iconName = "event-note"
        } else if (routeName === "Podcast") {
          iconName = "mic"
        }

        return <IconComponent name={iconName} size={25} color={tintColor}/>
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      headerLeft: <LogoTitle />,
      headerRight: <AvatarHeader />
    }
  }
});

export const AppContainer = createAppContainer(StackNavigator);
