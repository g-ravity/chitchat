import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import faker from "faker";

import Header from "../components/Settings/Header";
import SettingsList from "../components/Settings/SettingsList";
import ProfileImage from "../components/ProfileImage";

const name = faker.name.findName();
const about = faker.lorem.sentence();

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={style.containerStyle}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <ProfileImage
        name={name}
        detail={about}
        image={navigation.getParam("image")}
        icons={["camera"]}
      />
      <SettingsList />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#eaeaea"
  }
});

export default SettingsScreen;
