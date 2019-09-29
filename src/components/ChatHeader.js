import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

import Header from "./Header";

const ChatHeader = ({ name, image, lastSeen, isActive, navigation }) => {
  return (
    <Header>
      <TouchableNativeFeedback onPress={() => navigation.navigate("Home")}>
        <Feather name="arrow-left" size={20} style={style.iconStyle} />
      </TouchableNativeFeedback>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image
          source={{
            uri: image
          }}
          style={style.imageStyle}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: 10
          }}
        >
          <Text style={style.headerTextStyle} numberOfLines={1}>
            {name}
          </Text>
          <Text style={style.subHeaderTextStyle}>
            {isActive ? "Online" : `Last Seen At ${lastSeen}`}
          </Text>
        </View>
      </View>
      <Feather name="phone" size={20} style={style.iconStyle} />
      <Feather name="video" size={20} style={style.iconStyle} />
      <Feather
        name="more-vertical"
        size={20}
        style={{ ...style.iconStyle, marginRight: 0 }}
      />
    </Header>
  );
};

const style = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 25
  },
  headerTextStyle: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "Mark-Bold",
    marginBottom: 5
  },
  subHeaderTextStyle: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: "Mark-Light",
    textTransform: "lowercase"
  },
  iconStyle: {
    color: "#ffffff",
    marginRight: 15
  }
});

export default withNavigation(ChatHeader);
