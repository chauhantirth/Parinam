const searchReducer = (state, action) => {
    switch (action.type) {
      case "SET_RESULT":
        return {
          ...state,
          loading: false,
          error: false,
          errorMessage: '',
          errorCode: '',
          name: action.data.name,
          marks: action.data.marks,
          school: action.data.school,
          aadhar_no: action.data.aadhar_no,
          initLoad: false,
        };
      case "SET_LOADING":
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
          errorCode: '',
          name: "",
          marks: 0,
          school: "",
          aadhar_no: "",
        };
      case "SET_ERROR":
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.data.errorMessage,
          errorCode: action.data.errorCode,
        };
      case "SET_QUERY":
        return {
          ...state,
          error: false,
          errorMessage: '',
          errorCode: '',
          query: action.query,
        };
      case "SET_NOTLOADING":
        return {
          ...state,
          loading: false,
        };
    
      default:
        return state;
    }
  };
  
  export default searchReducer;
  