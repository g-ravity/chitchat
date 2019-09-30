import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/Profile/Header";

const ProfileScreen = () => {
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

export default ProfileScreen;
