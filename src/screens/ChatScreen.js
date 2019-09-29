import React from "react";
import { View, StyleSheet } from "react-native";

import ChatHeader from "../components/ChatHeader";
import Messages from "../components/Messages";

const ChatScreen = ({ navigation }) => {
  return (
    <View style={style.containerStyle}>
      <ChatHeader
        name={navigation.getParam("name")}
        image={navigation.getParam("image")}
        isActive={navigation.getParam("isActive")}
        lastSeen={navigation.getParam("lastSeen")}
      />
      <Messages />
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
