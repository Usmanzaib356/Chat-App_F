import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../chat.css"
import useAuth from "../hooks/useAuth"
import axios from 'axios'
function Chats() {

 // Context Api
 const {API_URL} = useAuth()


  // usestate

  const [texts,setTexts] = useState([])
  

  
  // useref

  const text = useRef()



// Axois Get

useEffect(()=>{

  const url =  API_URL + "/messages"
   axios.get(url).then(
    (res)=>{
      console.log(res);
      setTexts(res.data)
    }
   ).catch(
    (err)=>{
      console.log(err);
    }
   )    

  },[API_URL])



  // Scroll to bottom effect
  useEffect(() => {
    const container = document.querySelector(".message-container");
    container.scrollTop = container.scrollHeight;
  }, [texts]);



 


  // handleKeyDown
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      send(e);
    }
  }



  // funtion

  function send(e){
    e.preventDefault()
    
    // Axois Post
    
  const url = API_URL + "/msg"
  const json = {msg:text.current.value}


  

  axios.post(url,json).then(
    (res)=>{
      console.log(res);
      setTexts([...texts, json]) 
      text.current.value = ''
      
   
    }
  ).catch(
    (err)=>{
   console.log(err);

    }
  )

  
  
}





  return (
    <>
    
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand"><h3> Lets Start Chats </h3></a>
    <form className="d-flex" >
      <Link  href="" to="/logout" className="btn" type="submit">Logout</Link>
    </form>
  </div>
</nav>   


<div className="container d-flex justify-content-center">
  <div className="card mt-3">
    <div className="d-flex flex-row justify-content-between p-3 adiv text-white ">
      <i className="fas fa-chevron-left"></i>
      <span className="pb-3"  >Live chat</span>
      <i className="fas fa-times"></i>
    </div>

    <div className="message-container">
    {texts.map((item) => (
    <div className="d-flex flex-row p-3 message" key={item._id}>
      <p>{item.msg}</p>
    </div>
))}

    </div>  


    <div className="form-group px-3 mb-3">
      <input  onKeyDown={handleKeyDown}   ref={text} className="form-control" rows="1" placeholder='Type Your Text'  ></input>
      <button onClick={(e)=> send(e) } className='chatbtn'  >
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
        </svg>
      </div>
    </div>
    <span>Send</span>
  </button>
        </div>
    </div>
  </div>


  



    
    </>
  )
}

export default Chats  