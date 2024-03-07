// reducer functions

const searchReducer = (state, action) => {
    switch(action.type) {
        case "GET_RESULT":
            return {
                ... state,
                name: "Suresh"
            };
    };

    return state;
};

export default searchReducer;