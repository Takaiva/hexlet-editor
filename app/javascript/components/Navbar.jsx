import React, { useState } from 'react';
import getRoutes from '../routes.js';

export function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const {
    homePagePath,
    replsPagePath,
    aboutPagePath,
    loginPagePath,
    signUpPagePath,
  } = getRoutes();

  return (
    <>
      {menuStatus && (
        <div
          className="offcanvas offcanvas-start show"
          style={{ 'z-index': 5000, width: '10rem', visibility: 'visible' }}
          tabIndex="-1"
          id="offcanvasStart"
          aria-labelledby="offcanvasStartLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="offcanvas-header">
            <p className="h5" id="offcanvasStartLabel">
              Menu
            </p>
            <button
              className="btn-close text-reset"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => setMenuStatus(!menuStatus)}
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={homePagePath}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={replsPagePath}>
                  My repls
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm border-bottom-mb-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-start">
            <button
              className="border-0 bg-white"
              type="button"
              onClick={() => setMenuStatus(!menuStatus)}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" aria-hidden="true" href={homePagePath}>
              Editor
            </a>
          </div>
          <div className="d-flex justify-content-end">
            <a className="nav-link px-3" href={aboutPagePath}>
              About
            </a>
            <a className="nav-link px-3" href={loginPagePath}>
              Sign in
            </a>
            <a className="nav-link px-3" href={signUpPagePath}>
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
