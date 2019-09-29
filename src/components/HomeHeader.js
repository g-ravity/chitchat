import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import faker from "faker";

const HomeHeader = () => {
  return (
    <View style={style.containerStyle}>
      <Image
        source={{
          uri: faker.image.avatar()
        }}
        style={style.imageStyle}
      />
      <Text style={style.textStyle}>Gupshup</Text>
      <Feather name="search" size={20} style={style.iconStyle} />
    </View>
  );
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
    marginTop: 10,
    marginLeft: 10
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 25
  },
  textStyle: {
    fontSize: 32,
    color: "#ffffff",
    fontFamily: "Mark-Bold",
    textTransform: "lowercase"
  },
  iconStyle: {
    color: "#ffffff"
  }
});

export default HomeHeader;
