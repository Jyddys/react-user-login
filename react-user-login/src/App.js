import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-contex';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const users = {
    email: "testi1@testi.fi",
    password: "vab1t1t!",
  }


  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn', '1');
    
    if(storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    if(email === users.email && password ===  users.password) {
      localStorage.setItem('isLoggedIn', '1');  
      setIsLoggedIn(true)
    } else {
      console.log("wrong email or password")
    }
    
  };


  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler
        }}
        >
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
