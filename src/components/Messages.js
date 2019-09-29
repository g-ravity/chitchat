import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";
import faker from "faker";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { formatTime } from "../utils";

const textsList = [];
let numberOfTexts = 20;
while (numberOfTexts--)
  textsList.push({
    id: Math.floor(Math.random() * 2),
    text: faker.lorem.text(),
    time: formatTime(faker.date.recent())
  });

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref="flatList"
          data={textsList}
          keyExtractor={(item, index) => item.text + index}
          inverted
          onScroll={({ nativeEvent }) => {
            if (
              (this.state.scrollPosition <= 0 &&
                nativeEvent.contentOffset.y - 100 > 0) ||
              (this.state.scrollPosition > 0 &&
                nativeEvent.contentOffset.y - 100 <= 0)
            )
              this.setState({
                scrollPosition: nativeEvent.contentOffset.y - 100
              });
          }}
          renderItem={({ item }) => (
            <View
              style={{
                marginVertical: 5,
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
        {this.state.scrollPosition > 0 ? (
          <TouchableNativeFeedback
            onPress={() =>
              this.refs.flatList.scrollToOffset({ offset: 0, animated: false })
            }
          >
            <Feather
              name="chevrons-down"
              size={25}
              style={style.scrollButtonStyle}
            />
          </TouchableNativeFeedback>
        ) : null}
      </View>
    );
  }
}

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
  },
  scrollButtonStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(126, 149, 247,0.6)",
    color: "#ffffff",
    borderRadius: 100,
    padding: 7,
    margin: 5
  }
});

export default Messages;
