import React from "react";
import { View, StyleSheet } from "react-native";
import faker from "faker";

import Header from "../components/SettingsHeader";
import ProfileImage from "../components/ProfileImage";

const name = faker.name.findName();
const about = faker.lorem.sentence();

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={style.containerStyle}>
      <Header />
      <ProfileImage
        name={name}
        detail={about}
        image={navigation.getParam("image")}
        icons={["camera"]}
      />
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
