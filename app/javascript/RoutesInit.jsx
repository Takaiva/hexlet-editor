import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from './App.jsx';
import { Profile } from './Pages/Profile.jsx';
import { SignUp } from './Pages/SignUp.jsx';
import { SignIn } from './Pages/SignIn.jsx';
import { About } from './Pages/About.jsx';
import { RemindPassword } from './Pages/RemindPassword.jsx';

function RoutesInit() {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="/" element={<App />} />
      <Route path="profile" element={<Profile />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<SignIn />} />
      <Route path="remind_password" element={<RemindPassword />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default RoutesInit;
