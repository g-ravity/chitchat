import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import faker from "faker";

const imgNum = Math.floor(Math.random() * 100);
const imageArr = [];
for (let i = 1; i <= imgNum; i++) {
  if (i > 12) break;
  else imageArr.push(`https://picsum.photos/200?random=${i}`);
}

const Details = () => {
  return (
    <View style={style.containerStyle}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={style.headerTextStyle}>Media</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={style.textStyle}>{imgNum}</Text>
          <Feather name="chevron-right" size={20} style={style.iconStyle} />
        </View>
      </View>
      <FlatList
        data={imageArr}
        keyExtractor={item => item}
        numColumns={6}
        renderItem={({ item }) => (
          <View
            style={{
              width: 100,
              height: 100,
              borderColor: "red",
              borderWidth: 1
            }}
          >
            <Image
              source={{ uri: item }}
              style={{
                borderColor: "blue",
                borderWidth: 1,
                width: 100,
                height: 100
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    marginTop: 50,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10
  },
  headerTextStyle: {
    fontFamily: "Mark-Bold",
    fontSize: 18,
    color: "#7e95f7"
  },
  textStyle: {
    fontFamily: "Mark-Regular",
    fontSize: 18,
    color: "#4a4a4a"
  },
  iconStyle: {
    color: "#4a4a4a"
  }
});

export default Details;
