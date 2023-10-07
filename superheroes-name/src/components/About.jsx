import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const About = () => {

  let response;
  const [data, setData] = useState("");
  let isName;

  const notify = (isName) => {
    if(isName){
      toast.success('Name Generated Successfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else{
      toast.error('Name Not Generated!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }

  async function showName() {
    try {
      response = await axios.get('http://localhost:4000/');
      console.log(response.data)
      setData(response.data.name)
      isName=response.data.name;
      notify(isName);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='my-4 px-4 flex flex-col'>
      <h3 className='text-center text-2xl'>Super Heroes website</h3> <br />
      <p className='text-lg text-center'>This is a web application that generates random name of super heroes. These are all famous super heroes</p>
      <p className='text-lg text-center'>This is a Fullstack web app.</p>
      <p className='mx-2 text-md'>Lets get started and try this:</p>
      <p className='mx-2 text-md'>Click Below button to generate super hero name</p>
      <div className="superhero-name">
        <span className="mx-2 text-lg font-bold name" id='name'>Super Hero Name: {data}</span>
      </div>
      <button className="btn my-2 mx-3 p-2 md:w-[10vw] text-white bg-purple-600 hover:bg-purple-700 rounded-md" onClick={() => showName()}>Generate Name</button>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default About