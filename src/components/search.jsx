import React, { useReducer, useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import reducer from '../reducer/searchReducer';
import PdfApp from './pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Search = () => {
  // API START =======================
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
  // API END ========

  const data = useGlobalContext();
  const initState = {
    loading: false,
    error: "",
    name: "",
    marks: 0,
    school: "",
    aadhar_no: 0,
    query: "",
    initLoad: true
  };
  const [state, dispatch] = useReducer(reducer, initState);
  const [ftdl, setFtdl] = useState(2);

  const handleVar = (value) => {
    setFtdl(value);
  }

  const handleSubmit = async (e) => {
    // console.log("handleSubmit Called.")
    e.preventDefault();

    try {
      await fetchAPI('http://localhost:4000/api/v1/result', state.query);
    } catch (error) {
      console.error('Error:', error);
    } finally {
    }
  };

  return (
    <>
      <div>
        From Search, This is a { data }
        <div>
          <p>example: 458593000000</p>
          <form>
            <input
              type="text"
              value={state.query}
              onChange={(ev) => {
                // console.log("Changed to digit: "+ ev.target.value.length)
                dispatch({
                type: "SET_QUERY",
                query: ev.target.value
              })}
            }
            onKeyUp={(ev) => {
              // console.log("Val: "+ev.target.value + " and length is: "+ev.target.value.length)
              if (ev.target.value.length === 12) {
                // console.log("Called API.")
                handleSubmit(ev);
              }
            }}
              placeholder="Enter your Enrolment Number"
            />
            {/* <button onClick={handleSubmit} type="submit" id="pdfButton">Download new</button> */}
          </form>
          <div>
          <PDFDownloadLink document={<PdfApp name={state.name} marks={state.marks} schoolName={state.school}/>} fileName='hello1'>
            
            {({loading}) => {
              // console.log(ftdl);
              if (loading) {
                if (state.initLoad == true) {
                  // console.log("Inside Loading Doc...")
                  return (<button>Loading Documents...</button>)
                } 
                else {
                  {handleVar(2)}
                  // console.log("Inside Preparing Result...")
                  return (<button> Preparing Result...</button>)
                }
              } 
              else {
                if (state.loading) {
                  {handleVar(3)}
                  // console.log("Inside Fetching Result...")
                  return (<button> Fetching Result...</button>)
                } 
                else {
                  if (ftdl == 3) {
                    // console.log("Inside Show Result upper.")
                    return (<button>Fetching Result...</button>)
                  } 
                  else {
                    // console.log("Inside Show Result.")
                    return (<button>Show Result.</button>)
                  }
                }
              }
            }}
          </PDFDownloadLink>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Search;
