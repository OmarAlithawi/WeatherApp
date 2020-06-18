const inputValueReduer = (state = "", action) => {
  switch (action.type) {
    case "INPUT_VALUE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default inputValueReduer;
