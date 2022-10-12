import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts';
import axios from 'axios';
import routes from '../routes.js';

function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logOut = async () => {
      await axios.post(routes.logoutPath());
      setLoggedIn(false);
  };

  useEffect(() => {
   /* const fetchAuthData = async () => {
      const response = await axios.get('api/checkAuth'); // boolean: проверка на авторизированность
      setLoggedIn(response.data);
    }*/
    // fetchAuthData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logOut,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
