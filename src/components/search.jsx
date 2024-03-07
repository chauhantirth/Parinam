import React, { useReducer } from 'react';
import { useGlobalContext } from '../context/context';

import reducer from '../reducer/searchReducer';

const search = () => {

  // bucket creation
  const initState = {
    name: "dhsakdhajskdh",
    marks: 0,
    school: "",
    aadharNo: "",
  };
  const [state, dispatch] = useReducer(reducer, initState);

  // Get Result
  const showResult = (e) => {
    e.preventDefault();

    console.log(state.name)
    return (
      <p>
        <strong>
          Name is {state.name}
        </strong>
      </p>
    );
  };

  var data = useGlobalContext();
  return (
    <>
      <div>
        From Search, This is a { data }
        <button onClick={showResult}>Show Result</button>
      </div>
    </>
  )
};

export default search