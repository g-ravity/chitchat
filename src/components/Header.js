import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={style.containerStyle}>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={style.imageStyle}
      />
      <Text style={style.textStyle}>Gupshup</Text>
      <Feather name="search" size={20} style={style.iconStyle} />
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    height: 100,
    backgroundColor: "#ff4ca9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textStyle: {
    fontSize: 28,
    color: "#ffffff",
    fontFamily: "Mark-Light",
    textTransform: "lowercase"
  },
  iconStyle: {
    color: "#ffffff"
  }
});

export default Header;
