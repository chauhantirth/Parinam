import React, { useReducer } from 'react';
import { useGlobalContext } from '../context/context';
import reducer from '../reducer/searchReducer';

const Search = () => {
  const fetchAPI = async (endpoint, query) => {
    try {
      dispatch({ type: "SET_LOADING" }); // Set loading state
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Host': 'localhost'
        },
        body: JSON.stringify({
          aadhar_no: query
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const resData = await response.json();

      dispatch({
        type: "SET_RESULT",
        data: {
          'name': resData.name,
          'school': resData.school_name,
          'marks': resData.marks,
          'aadhar_no': resData.aadhar_no,
        }
      });
    } catch (error) {
      dispatch({ type: "SET_ERROR" }); // Set error state
      console.error('Error fetching data:', error);
    }
  };

  const data = useGlobalContext();
  const initState = {
    loading: false,
    error: "",
    name: "",
    marks: 0,
    school: "",
    aadhar_no: 0,
    query: "",
  };
  const [state, dispatch] = useReducer(reducer, initState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchAPI('http://localhost:4000/api/v1/result', state.query);
  };

  return (
    <>
      <div>
        From Search, This is a { data }
        <div>
          <form onSubmit={handleSubmit}>
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
          {state.loading && <p>Loading...</p>}
          {state.error && <p>Error: {state.error}</p>}
          {state.name && (
            <div>
              <h2>Result</h2>
              <p>Name: {state.name}</p>
              <p>School: {state.school}</p>
              <p>Marks: {state.marks}</p>
              <p>Aadhar No: {state.aadhar_no}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
