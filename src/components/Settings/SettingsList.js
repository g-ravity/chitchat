import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

class SettingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLastSeen: false,
      lastSeenValue: "Everyone"
    };
    this.animateValue = new Animated.Value(0);
  }

  componentDidUpdate() {
    if (this.state.showLastSeen) this.slideDown();
    else this.slideUp();
  }

  slideDown() {
    Animated.timing(this.animateValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.cubic
    }).start();
  }

  slideUp() {
    Animated.timing(this.animateValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.cubic
    }).start();
  }

  render() {
    const height = this.animateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"]
    });

    const opacity = this.animateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <View style={style.containerStyle}>
        <TouchableOpacity
          onPress={() =>
            this.setState({ showLastSeen: !this.state.showLastSeen })
          }
        >
          <View style={style.menuContainerStyle}>
            <Text style={style.headerStyle}>Last Seen</Text>
            <Text style={style.subHeaderStyle}>{this.state.lastSeenValue}</Text>
            <Feather
              name={this.state.showLastSeen ? "chevron-up" : "chevron-down"}
              size={20}
              style={style.dropdownStyle}
            />
          </View>
        </TouchableOpacity>
        <Animated.View
          style={{ height, opacity, position: "relative", top: 20 }}
        >
          <RadioButton.Group
            onValueChange={value => this.setState({ lastSeenValue: value })}
            value={this.state.lastSeenValue}
          >
            <View style={style.dropdownContainerStyle}>
              <View>
                <RadioButton value="Everyone" color="#7e95f7" />
              </View>
              <Text style={style.subHeaderStyle}>Everyone</Text>
            </View>
            <View style={style.dropdownContainerStyle}>
              <View>
                <RadioButton value="My Contacts" color="#7e95f7" />
              </View>
              <Text style={style.subHeaderStyle}>My Contacts</Text>
            </View>
            <View style={style.dropdownContainerStyle}>
              <View>
                <RadioButton value="Nobody" color="#7e95f7" />
              </View>
              <Text style={style.subHeaderStyle}>Nobody</Text>
            </View>
          </RadioButton.Group>
        </Animated.View>
        <View style={style.menuContainerStyle}>
          <Text style={style.headerStyle}>Blocked Contacts</Text>
          <Text style={style.subHeaderStyle}>None</Text>
        </View>
        <View style={style.menuContainerStyle}>
          <Text style={style.headerStyle}>Chat Backup</Text>
        </View>
        <View style={style.menuContainerStyle}>
          <Text style={style.headerStyle}>Notification Tone</Text>
          <Text style={style.subHeaderStyle}>Default</Text>
        </View>
        <View style={style.menuContainerStyle}>
          <Text style={style.headerStyle}>Ringtone</Text>
          <Text style={style.subHeaderStyle}>Default</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    marginTop: 30,
    marginRight: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1
  },
  menuContainerStyle: {
    marginVertical: 15
  },
  headerStyle: {
    fontFamily: "Mark-Regular",
    fontSize: 22,
    marginBottom: 5
  },
  subHeaderStyle: {
    fontFamily: "Mark-Regular",
    fontSize: 16,
    color: "#999999"
  },
  dropdownContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  dropdownStyle: {
    position: "absolute",
    right: 0,
    color: "#7e95f7"
  }
});

export default SettingsList;
