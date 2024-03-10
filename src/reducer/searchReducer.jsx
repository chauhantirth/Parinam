// reducer functions

const fetchData = (endpoint, query) => {

    var apiData = fetch(endpoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Host': 'localhost'
        },
        body: JSON.stringify({
            aadhar_no: query
        })
    }).then((res) => res.json()).then((data) => {
        return data;
    })
    return apiData;
};

const searchReducer = (state, action) => {
    switch(action.type) {
        case "FETCH_RESULT":
            
            const API = "http://localhost:4000/api/v1/result";
            var data = fetchData(API, state.query);
            
            return {
                ... state,
                name: data.name,
                marks: data.marks,
                school: data.school,
                aadharNo: data.aadharno,
            };

        // case "SET_RESULT":
        //     return {
        //         ... state,
        //         name: "Suresh",
        //         aadharNo: state.query
        //     };
        
        case "SET_QUERY":
            return {
                ... state,
                query: action.query
            };
    };

    return state;
};

export default searchReducer;