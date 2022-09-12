import React from 'react';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm border-bottom-mb-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-start">
          <button className="border-0 bg-white" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" aria-hidden="true" href="/">
            Editor
          </a>
        </div>
        <div className="d-flex justify-content-end">
          <a className="nav-link px-3" href="about">
            About
          </a>
          <a className="nav-link px-3" href="login">
            Sign in
          </a>
          <a className="nav-link px-3" href="signup">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
