  import axios from 'axios'
  import React, { useRef, useState } from 'react'
  import { Link, useNavigate } from 'react-router-dom'
  import useAuth from "../hooks/useAuth"
  import { bake_cookie } from 'sfcookies'
  function Login() {


    // usestate
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState("")


    // useNavigate
    const naviagte = useNavigate()


    // Context Api
    const { API_URL, setIsLogin } = useAuth()


    // UseRef 
    const inputEmail = useRef()
    const inputPassword = useRef()


    // Buttun Function
    function Submit(e) {
      setLoading(true)
      e.preventDefault()


      // Axois Post request

      const url = API_URL + "/signin"
      const json = {
        email: inputEmail.current.value,
        password: inputPassword.current.value
      }

      axios.post(url, json).then(
        (res) => {
          console.log(res);
          setIsLogin(true);
          setLoading(false)
          
      // cookies expiration date
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
          bake_cookie("islogin", true, expirationDate );
          naviagte("/chat")



        }).catch(
          (err) => {
            console.log(err);
            setLoading(false)
            setIsLogin(false)
            naviagte("/")
            setMsg(err.response.data);




          })

    }



    return (
      <>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-l-55 p-r-55 p-t-30 p-b-30" id='main'>
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-49">
                  {loading ?
                    (<div className="three-body">
                      <div className="three-body__dot"></div>
                      <div className="three-body__dot"></div>
                      <div className="three-body__dot"></div>
                    </div>) : (
                      "Login"
                    )
                  }

                  <p className='text-danger mt-2'>{msg}</p>
                </span>

                <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                  <span className="label-input100 ">Email</span>
                  <input ref={inputEmail} className="input100" type="text" name="username" placeholder="Type your Email" />
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <span className="label-input100">Password</span>
                  <input ref={inputPassword} className="input100" type="password" name="pass" placeholder="Type your password" />
                </div>

                <br />
                <br />

                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <button onClick={(e) => Submit(e)} className="login100-form-btn">
                      Login
                    </button>
                  </div>
                </div>

                <div className="txt1 text-center p-t-54 p-b-20 ">
                  <span>
                    <Link to='/signup' className='text-dark'>Don't have an account? Singup</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Login;
