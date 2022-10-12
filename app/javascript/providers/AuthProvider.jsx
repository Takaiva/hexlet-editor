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
    const fetchAuthData = async () => {
      try {
        await axios.get(routes.userProfilePath());
        setLoggedIn(true);
      } catch (err) {
        setLoggedIn(false);
      }
    };
    fetchAuthData();
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
