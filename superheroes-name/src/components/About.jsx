import React from 'react'
import { useState } from 'react';
import axios from 'axios'
const About = () => {

  let response;
  const [data, setData] = useState("");
    
    async function showName(){
      try{
        response = await axios.get('http://localhost:4000/');
        console.log(response.data)
        setData(response.data.name)
      } catch(err){
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
        <button className="btn my-2 mx-3 p-2 md:w-[10vw] text-white bg-purple-600 hover:bg-purple-700 rounded-md" onClick={()=>showName()}>Generate Name</button>
    </div>
  )
}

export default About