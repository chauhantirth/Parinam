const searchReducer = (state, action) => {
    switch (action.type) {
      case "SET_RESULT":
        return {
          ...state,
          loading: false,
          error: '',
          name: action.data.name,
          marks: action.data.marks,
          school: action.data.school,
          aadhar_no: action.data.aadhar_no,
        };
      case "SET_LOADING":
        return {
          ...state,
          loading: true,
          error: "",
          name: "",
          marks: 0,
          school: "",
          aadhar_no: "",
        };
      case "SET_ERROR":
        return {
          ...state,
          loading: false,
          error: "An error occurred.",
        };
      case "SET_QUERY":
        return {
          ...state,
          query: action.query,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  