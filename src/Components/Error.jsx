import React from 'react'
import { useNavigate } from 'react-router-dom';
function Error() {

  const  navigate  = useNavigate()

  setTimeout(() => {
navigate("/")
}, 3000);


  return (
    <>
    
    <br />
    <br />
    <br />
    <br />
    <div className='parent-container '>
     <div className="card">
      <h2>Page Not Found</h2>
   </div>
   </div>
    </>
    
  )
}

export default Error