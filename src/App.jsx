import React, { useState, useEffect } from 'react';
import './index.css';
import Chats from './Components/Chats';
import Login from './Components/Login';
import { Routes, Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Error from './Components/Error';
import Permission from './Components/Permission';
import useAuth from './hooks/useAuth';
import Logout from './Components/Logout';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  // Context Api
  const { islogin } = useAuth();



  useEffect(() => {

    setIsLoading(false)

  }, [islogin]);

  if (isLoading) {
    return <div className="three-body">
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
    </div>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/chat"
          element={islogin ? <Chats /> : <Permission />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
