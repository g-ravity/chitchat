import React from "react";
import { View, StyleSheet } from "react-native";

const Header = ({ children }) => {
  return <View style={style.containerStyle}>{children}</View>;
};

const style = StyleSheet.create({
  containerStyle: {
    height: 60,
    backgroundColor: "#ff4ca9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginVertical: 10,
    marginLeft: 10
  }
});

export default Header;
