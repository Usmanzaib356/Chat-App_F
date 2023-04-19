import React from 'react'
import { useNavigate } from 'react-router-dom';
import { delete_cookie } from 'sfcookies'

function Logout() {

  const  navigate = useNavigate()

 delete_cookie("islogin")

 setTimeout(() => {
    navigate("/login")
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