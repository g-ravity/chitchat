import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./src/screens/HomeScreen";
import ChatScreen from "./src/screens/ChatScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
