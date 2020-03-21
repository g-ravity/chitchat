import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Header from "../components/Profile/Header";
import ProfileImage from "../components/ProfileImage";
import Details from "../components/Profile/Details";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={style.containerStyle}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileImage
          name={navigation.getParam("name")}
          image={navigation.getParam("image")}
          detail={
            navigation.getParam("isActive")
              ? "online"
              : `last seen at ${navigation.getParam("lastSeen")}`
          }
          icons={["phone", "video", "message-processing"]}
        />
        <Details />
      </ScrollView>
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
