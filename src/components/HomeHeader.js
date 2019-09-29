import React from "react";
import { Text, StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import faker from "faker";

import Header from "./Header";

const HomeHeader = ({ navigation }) => {
  const profileImage = faker.image.avatar();

  return (
    <Header>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("Settings", { image: profileImage })}
      >
        <Image
          source={{
            uri: profileImage
          }}
          style={style.imageStyle}
        />
      </TouchableNativeFeedback>
      <Text style={style.textStyle}>Gupshup</Text>
      <Feather name="search" size={20} style={style.iconStyle} />
    </Header>
  );
};

const style = StyleSheet.create({
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

export default withNavigation(HomeHeader);
