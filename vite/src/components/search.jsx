import React, { useReducer, useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import reducer from '../reducer/searchReducer';
import PdfApp from './pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Search = () => {

  const buttonStyle = 'disabled:opacity-40 disabled:scale-[.97] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-2 rounded-full bg-[#A4C9D8] text-black text-lg font-saira font-semibold '

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
        <div className='flex flex-col gap-4 bg-[#E9F7FD] px-16 pt-4 pb-6 rounded-3xl border-2 border-gray-200 items-center justify-center mr-[0px]'>
          <h1 className='text-[24px]'>CHECK YOUR RESULT</h1>
          <form>
            <label className='text-lg font-medium ml-2'>AADHAR NUMBER</label>
            <input className='w-full border-2 border-grey-100 rounded-xl p-2 mt-1 bg-transparent'
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
          <div className='w-full'>
            <PDFDownloadLink document={<PdfApp name={state.name} marks={state.marks} schoolName={state.school}/>} fileName='hello1'>
              
              {({loading}) => {
                // console.log(ftdl);
                if (loading) {
                  if (state.initLoad == true) {
                    // console.log("Inside Loading Doc...")
                    return (<button className={buttonStyle} disabled={1}>Loading Documents...</button>)
                  } 
                  else {
                    {handleVar(2)}
                    // console.log("Inside Preparing Result...")
                    return (<button className={buttonStyle} disabled={1}> Preparing Result...</button>)
                  }
                } 
                else {
                  if (state.loading) {
                    {handleVar(3)}
                    // console.log("Inside Fetching Result...")
                    return (<button className={buttonStyle} disabled={1}> Fetching Result...</button>)
                  } 
                  else {
                    if (ftdl == 3) {
                      // console.log("Inside Show Result upper.")
                      return (<button className={buttonStyle} disabled={1}>Fetching Result...</button>)
                    } 
                    else {
                      // console.log("Inside Show Result.")
                      if (state.initLoad == true || state.query.length != 12) {
                        return (<button className={buttonStyle} disabled={1}>Show Result</button>)
                      } else {
                        return (<button className={buttonStyle} disabled={0}>Show Result</button>)
                      }
                    }
                  }
                }
              }}
            </PDFDownloadLink>
          </div>
        </div>
    </>
  );
};

export default Search;
