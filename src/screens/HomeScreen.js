import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { connect } from "react-redux";

import Header from "../components/Header";
import { loadFont } from "../actions";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.navListener = this.props.navigation.addListener("didFocus", () =>
      StatusBar.setBackgroundColor("#e62e8d")
    );
  }

  componentDidMount() {
    this.props.loadFont();
  }

  componentWillUnmount() {
    this.navListener.remove();
  }

  render() {
    return this.props.isFontLoaded ? (
      <View forceInset={{ top: "always" }}>
        <Header />
      </View>
    ) : null;
  }
}

const mapStateToProps = ({ isFontLoaded }) => {
  return { isFontLoaded };
};

const style = StyleSheet.create({});

export default connect(
  mapStateToProps,
  { loadFont }
)(HomeScreen);
