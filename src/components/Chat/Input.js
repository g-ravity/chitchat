import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const Input = () => {
  const [message, setMessage] = useState("");

  return (
    <View style={style.containerStyle}>
      <Feather name="paperclip" size={20} style={style.iconStyle} />
      <TextInput
        style={style.inputStyle}
        placeholder="Type a message"
        autoCapitalize="none"
        autoCorrect={false}
        multiline
        value={message}
        onChangeText={input => setMessage(input)}
      />
      <Feather name="send" size={20} style={style.iconStyle} />
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputStyle: {
    fontSize: 18,
    fontFamily: "Mark-Regular",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    maxHeight: 150
  },
  iconStyle: {
    color: "#ffffff",
    backgroundColor: "#7e95f7",
    padding: 10,
    borderRadius: 100
  }
});

export default Input;
