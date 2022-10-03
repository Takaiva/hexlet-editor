import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from './App.jsx';
import { Profile } from './Pages/Profile.jsx';
import { SignUp } from './Pages/SignUp.jsx';
import { SignIn } from './Pages/SignIn.jsx';
import { About } from './Pages/About.jsx';
import { RemindPassword } from './Pages/RemindPassword.jsx';
import { Repls } from './components/Repls';
import getRoutes from './routes.js';

function RoutesInit() {
  const {
    homePagePath,
    aboutPagePath,
    profilePagePath,
    loginPagePath,
    signUpPagePath,
    remindPassPagePath,
    replsPagePath,
  } = getRoutes();

  return (
    <Routes>
      <Route path={aboutPagePath} element={<About />} />
      <Route path={homePagePath} element={<App />} />
      <Route path={profilePagePath} element={<Profile />} />
      <Route path={signUpPagePath} element={<SignUp />} />
      <Route path={loginPagePath} element={<SignIn />} />
      <Route path={remindPassPagePath} element={<RemindPassword />} />
      <Route path={replsPagePath} element={<Repls />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default RoutesInit;
