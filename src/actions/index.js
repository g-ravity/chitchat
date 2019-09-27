import * as Font from "expo-font";

export const loadFont = () => async (dispatch, getState) => {
  await Font.loadAsync({
    "Mark-Bold": require("../../assets/fonts/Mark-Bold.ttf"),
    "Mark-Extralight": require("../../assets/fonts/Mark-Extralight.ttf"),
    "Mark-Light": require("../../assets/fonts/Mark-Light.ttf"),
    "Mark-Regular": require("../../assets/fonts/Mark-Regular.ttf")
  });
  dispatch({
    type: "font_loaded"
  });
};
