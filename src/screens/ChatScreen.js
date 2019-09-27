import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const ChatScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ChatScreen</Text>
      <Button onPress={() => navigation.navigate("Home")}>Home</Button>
    </View>
  );
};

const style = StyleSheet.create({});

export default ChatScreen;
