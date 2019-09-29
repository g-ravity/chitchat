import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/Chat/ChatHeader";
import Messages from "../components/Chat/Messages";
import Input from "../components/Chat/Input";

const ChatScreen = ({ navigation }) => {
  return (
    <View style={style.containerStyle}>
      <Header
        name={navigation.getParam("name")}
        image={navigation.getParam("image")}
        isActive={navigation.getParam("isActive")}
        lastSeen={navigation.getParam("lastSeen")}
      />
      <Messages />
      <Input />
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#eaeaea",
    flex: 1
  }
});

export default ChatScreen;
