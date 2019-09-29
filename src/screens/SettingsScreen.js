import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../components/SettingsHeader";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={style.containerStyle}>
      <Header />
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#eaeaea"
  }
});

export default SettingsScreen;
