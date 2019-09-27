export default fontReducer = (state = false, action) => {
  switch (action.type) {
    case "font_loaded":
      return true;
    default:
      return state;
  }
};
