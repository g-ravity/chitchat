import React from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import faker from "faker";

const renderStories = num => {
  const storiesList = [];
  while (num--) {
    storiesList.push({
      image: faker.image.avatar(),
      name: faker.name.firstName()
    });
  }

  return (
    <FlatList
      data={storiesList}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <View style={style.storiesContainerStyle}>
          <Image source={{ uri: item.image }} style={style.storiesImageStyle} />
          <Text style={style.storiesTextStyle}>{item.name}</Text>
          {item.name.length > 9 && (
            <LinearGradient
              colors={["transparent", "rgb(255,255,255)"]}
              style={{ width: 70, height: 20, position: "absolute", bottom: 0 }}
              start={[0.6, 0]}
              end={[1, 0]}
            />
          )}
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Stories = () => {
  return (
    <View style={style.containerStyle}>
      <Text style={style.headerTextStyle}>Stories</Text>
      <View>{renderStories(10)}</View>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 10,
    marginLeft: 10
  },
  headerTextStyle: {
    fontFamily: "Mark-Bold",
    fontSize: 18,
    marginTop: 10,
    textAlign: "right",
    marginRight: 20,
    color: "#7e95f7"
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  storiesContainerStyle: {
    margin: 10,
    alignItems: "center",
    width: 70,
    height: 80,
    overflow: "hidden"
  },
  storiesImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10
  },
  storiesTextStyle: {
    fontFamily: "Mark-Light",
    fontSize: 16
  }
});

export default Stories;
