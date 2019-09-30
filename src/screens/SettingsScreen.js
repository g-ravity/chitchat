import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import faker from "faker";

import Header from "../components/Settings/Header";
import SettingsList from "../components/Settings/SettingsList";
import ProfileImage from "../components/ProfileImage";

const name = faker.name.findName();
const about = faker.lorem.sentence();

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={style.containerStyle}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileImage
          name={name}
          detail={about}
          image={navigation.getParam("image")}
          icons={["camera"]}
        />
        <SettingsList />
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

export default SettingsScreen;
