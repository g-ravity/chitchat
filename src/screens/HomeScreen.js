import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Header from "../components/Home/HomeHeader";
import Stories from "../components/Home/Stories";
import ChatList from "../components/Home/ChatList";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.navListener = this.props.navigation.addListener("didFocus", () =>
      StatusBar.setBackgroundColor("#4a4a4a")
    );
    this.state = {
      isAppReady: false
    };
  }

  componentWillUnmount() {
    this.navListener.remove();
  }

  render() {
    if (!this.state.isAppReady)
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isAppReady: true })}
          onError={console.error}
          autoHideSplash
        />
      );
    return (
      <View forceInset={{ top: "always" }} style={style.containerStyle}>
        <Header />
        <Stories />
        <ChatList />
      </View>
    );
  }

  async _cacheResourcesAsync() {
    const cacheFonts = [
      Font.loadAsync({
        "Mark-Bold": require("../../assets/fonts/Mark-Bold.ttf"),
        "Mark-Extralight": require("../../assets/fonts/Mark-Extralight.ttf"),
        "Mark-Light": require("../../assets/fonts/Mark-Light.ttf"),
        "Mark-Regular": require("../../assets/fonts/Mark-Regular.ttf")
      })
    ];
    return Promise.all(cacheFonts);
  }
}

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#eaeaea",
    flex: 1
  }
});

export default HomeScreen;
