import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import faker from "faker";

import Header from "../Header";

const HomeHeader = ({ navigation }) => {
  const profileImage = faker.image.avatar();

  return (
    <Header>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings", { image: profileImage })}
        activeOpacity={0.6}
      >
        <Image
          source={{
            uri: profileImage
          }}
          style={style.imageStyle}
        />
      </TouchableOpacity>
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
