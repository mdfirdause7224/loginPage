import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="middle-box">
      <div className="login-wrapper">
        <div className="matter">
          <img className="image" src="./headimage.png" alt="" />
          <h4>Welcome to IN+</h4>
          <h5>
            Perfectly designed and precisely prepared admin theme with over 50
            pages with extra new web app views.
          </h5>
          <h5>Login in to see it in action.</h5>
        </div>

        <form className="login-form" action="index.html" method="POST">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <a href="#" className="forgot-password">
            <small>Forgot password?</small>
          </a>
          <h5 className="text-muted">
            <small>Do not have an account?</small>
          </h5>
          <a className="btn btn-secondary" href="register.html">
            Create an account
          </a>
        </form>

        <h5 className="footer">
          <small>
            <strong>©</strong> 2014 - {new Date().getFullYear()}{' '}
            <a
              href="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
              target="_blank"
              rel="noreferrer"
            >
              Inspinia
            </a>{' '}
            By <span className="fw-bold">WebAppLayers</span>
          </small>
        </h5>
      </div>
    </div>
  );
};

export default App;
