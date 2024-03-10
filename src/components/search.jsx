import React, { useReducer, useState } from 'react';
import { useGlobalContext } from '../context/context';

import reducer from '../reducer/searchReducer';

const search = () => {

  var data = useGlobalContext();

  // bucket creation
  const initState = {
    name: "",
    marks: 0,
    school: "",
    aadharNo: "",
    query: "",
  };

  const [state, dispatch] = useReducer(reducer, initState);

  // Get Result
  const showResult = (e) => {
    e.preventDefault();

    var result = dispatch({
      type: "FETCH_RESULT",
    });

    console.log(state);
  };

  return (
    <>
      <div>
        From Search, This is a { data }
        <div>
          <form onSubmit={showResult}>
            <input
              type="text"
              value={state.query}
              onChange={(ev) => dispatch({
                type: "SET_QUERY",
                query: ev.target.value
              })}
              placeholder="Enter your Enrolment Number"
            />
            <button type="submit">Get Result</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default search