import Cookies from 'js-cookie';
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Logout() {

  const  navigate = useNavigate()

 Cookies.remove("islogin")

 setTimeout(() => {
    navigate("/")
 }, 2000);


  return (
    <>
  <br />
    <br />
    <br />
    <br />

    <div className='parent-container '>
      <div className="cardss">
      <h2>You Logout</h2>
     </div>
     
   </div>
    </>
  )
}

export default Logout