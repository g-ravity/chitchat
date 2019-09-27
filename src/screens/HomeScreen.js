import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Header from "../components/Header";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.navListener = this.props.navigation.addListener("didFocus", () =>
      StatusBar.setBackgroundColor("#e62e8d")
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
      <View forceInset={{ top: "always" }}>
        <Header />
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

const style = StyleSheet.create({});

export default HomeScreen;
