import React, { useReducer, useState } from 'react';
import { useGlobalContext } from '../context/context';

import reducer from '../reducer/searchReducer';

const search = () => {

  var data = useGlobalContext();

  const [query, setQuery] = useState('');

  // bucket creation
  const initState = {
    name: "dhsakdhajskdh",
    marks: 0,
    school: "",
    aadharNo: "",
    query: "",
  };
  const [state, dispatch] = useReducer(reducer, initState);

  // Get Result
  const showResult = (e) => {
    e.preventDefault();
    console.log(query)
  };

  return (
    <>
      <div>
        From Search, This is a { data }
        <div>
          <form onSubmit={showResult}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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