import React, { useReducer, useState } from 'react';
import { useGlobalContext } from '../context/context';
import reducer from '../reducer/searchReducer';
import PdfApp from './pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

import ENV from './constants';

const Search = () => {

  const buttonStyle = 'disabled:opacity-40 disabled:scale-[.97] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-2 rounded-full bg-[#A4C9D8] text-black text-lg font-saira font-semibold '

  // API START =======================
  const fetchAPI = async (endpoint, query) => {

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

    dispatch({type: "SET_NOTLOADING"});

    if (!response.ok) {
      throw new Error('Failed to fetch data from Api');
    }
    
    const resData = await response.json();

    if (resData) {
      if (resData.success) {
        dispatch({
          type: "SET_RESULT",
          data: {
            'name': resData.container[0].name,
            'school': resData.container[0].school,
            'marks': resData.container[0].marks,
            'aadhar_no': resData.container[0].aadhar_no,
          }
        });
      } else {
        dispatch({
          type: "SET_ERROR",
          data: {
            'errorMessage': resData.errorMessage,
            'errorCode': resData.errorCode,
          }
        });
      }
    } else {
      dispatch({
        type: "SET_ERROR",
        data: {
          'errorMessage': "Unable to fetch data from the server. Try Refreshing the page",
          'errorCode': "5000",
        }
      });
    }
  };
  // API END ========

  const data = useGlobalContext();
  const initState = {
    loading: false,
    error: false,
    errorMessage: '',
    errorCode: '',
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

    e.preventDefault();

    try {
      await fetchAPI(ENV.backend, state.query);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
        <div className='flex flex-col gap-4 bg-[#E9F7FD] px-16 pt-4 pb-6 rounded-3xl border-1 border-gray-200 items-center justify-center mr-[0px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
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
              placeholder="Enter your Aadhar Number"
            />
            {/* <button onClick={handleSubmit} type="submit" id="pdfButton">Download new</button> */}
          </form>

          <div className={state.error ? 'py-0 px-3 max-w-[290px] text-sm text-red rounded-lg bg-[#E9F7FD] dark:bg-[#E9F7FD] dark:text-red-400' : 'hidden' }>
            <p className='font-regular text-wrap break-words'>
              {state.errorMessage}
            </p>
          </div>

          <div className='w-full'>
            <PDFDownloadLink document={<PdfApp name={state.name} marks={state.marks} schoolName={state.school}/>} fileName='hello1'>
              
              {({loading}) => {
                // console.log(ftdl +' ' + state.loading);
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
                      {!state.error ? handleVar(3) : {}}
                    // console.log("Inside Fetching Result...")
                    return (<button className={buttonStyle} disabled={1}> Fetching Result...</button>)
                  } 
                  else {
                    if (ftdl == 3) {
                      // console.log("Inside &&")
                      {state.error ? handleVar(2) : {}}
                      return (<button className={buttonStyle} disabled={1}> Fetching Result...</button>)
                    } 
                    else {
                      // console.log("Inside Show Result.")
                      if (state.initLoad == true || state.query.length != 12 || state.error) {
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
