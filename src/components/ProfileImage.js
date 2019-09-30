import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileImage = ({ name, detail, image, icons }) => {
  const renderIcons = () => {
    const iconList = icons.map(cur => (
      <View style={style.profileIconContainer} key={cur}>
        <MaterialCommunityIcons
          name={cur}
          size={30}
          style={style.profileIconStyle}
        />
      </View>
    ));
    return iconList;
  };

  return (
    <View style={{ width: "100%", height: 350 }}>
      <Image source={{ uri: image }} style={style.profileImageStyle} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0, 0.8)"]}
        style={style.gradientStyle}
        start={[0, 0.6]}
        end={[0, 1]}
      />
      <View style={style.profileInfoContainer}>
        <Text style={style.nameStyle}>{name}</Text>
        <Text style={style.detailStyle}>{detail}</Text>
      </View>
      <View style={style.iconGroupContainer}>{renderIcons()}</View>
    </View>
  );
};

const style = StyleSheet.create({
  profileImageStyle: {
    flex: 1,
    resizeMode: "cover"
  },
  gradientStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  profileInfoContainer: {
    position: "absolute",
    bottom: 40,
    marginHorizontal: 20
  },
  nameStyle: {
    fontFamily: "Mark-Bold",
    fontSize: 28,
    color: "#ffffff",
    marginBottom: 5
  },
  detailStyle: {
    fontFamily: "Mark-Light",
    fontSize: 16,
    color: "#ffffff"
  },
  iconGroupContainer: {
    position: "absolute",
    bottom: -30,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  profileIconContainer: {
    padding: 10,
    backgroundColor: "#ff4ca9",
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#eaeaea",
    marginRight: 15
  },
  profileIconStyle: {
    color: "#ffffff"
  }
});

export default ProfileImage;
