// reducer functions

const searchReducer = (state, action) => {
    switch(action.type) {
        case "GET_RESULT":
            return {
                ... state,
                name: "Suresh",
                aadharNo: state.query
            };
        
        case "SET_QUERY":
            return {
                ... state,
                query: action.query
            };
    };

    return state;
};

export default searchReducer;