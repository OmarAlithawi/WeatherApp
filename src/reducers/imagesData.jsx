const imagesDataReducer = (state = [], action) => {
  switch (action.type) {
    case "IMAGES_DATA":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

export default imagesDataReducer;
