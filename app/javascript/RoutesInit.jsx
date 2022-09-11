import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from './App.jsx';
import { Profile } from './Pages/Profile.jsx';
import { SignUp } from './Pages/SignUp.jsx';
import { SignIn } from './Pages/SignIn.jsx';

function RoutesInit() {
  return (
    <Routes>
      <Route path="about" element={<div>About Page</div>} />
      <Route path="/" element={<App />} />
      <Route path="profile" element={<Profile />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<SignIn />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default RoutesInit;
