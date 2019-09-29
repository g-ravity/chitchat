import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import faker from "faker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { formatTime } from "../utils";

const renderMessages = num => {
  const textsList = [];
  while (num--)
    textsList.push({
      id: Math.floor(Math.random() * 2),
      text: faker.lorem.text(),
      time: formatTime(faker.date.recent())
    });
  return (
    <FlatList
      data={textsList}
      keyExtractor={(item, index) => item.text + index}
      renderItem={({ item }) => (
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
            alignItems: item.id ? "flex-end" : "flex-start"
          }}
        >
          <View
            style={{
              ...style.textContainerStyle,
              backgroundColor: item.id ? "#ffffff" : "#7e95f7"
            }}
          >
            <Text
              style={
                item.id
                  ? { ...style.textStyle, ...style.sentTextStyle }
                  : { ...style.textStyle, ...style.receivedTextStyle }
              }
            >
              {item.text}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <Text
                style={
                  item.id
                    ? { ...style.timeStyle, ...style.sentTextStyle }
                    : { ...style.timeStyle, ...style.receivedTextStyle }
                }
              >
                {item.time}
              </Text>
              {item.id ? (
                <MaterialCommunityIcons
                  name="check-all"
                  size={15}
                  style={style.readReceiptStyle}
                />
              ) : null}
            </View>
          </View>
        </View>
      )}
    />
  );
};

const Messages = () => {
  return <View style={{ flex: 1 }}>{renderMessages(20)}</View>;
};

const style = StyleSheet.create({
  textStyle: {
    fontFamily: "Mark-Regular",
    fontSize: 18
  },
  textContainerStyle: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10
  },
  sentTextStyle: {
    color: "#4a4a4a"
  },
  receivedTextStyle: {
    color: "#ffffff"
  },
  timeStyle: {
    fontFamily: "Mark-Light",
    fontSize: 12
  },
  readReceiptStyle: {
    color: "#7e95f7",
    marginLeft: 5
  }
});

export default Messages;
