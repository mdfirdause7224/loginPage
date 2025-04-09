import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="middle-box">
      <div className="login-wrapper">
        <div className="matter">
          <img className="image" src="./headimage.png" alt="" />
          <h3>Welcome to IN+</h3>
          <p>
          Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
          </p>
          <p className='para'>Login in. To see it in action.</p>
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
          <p className="text-muted">
            <small>Do not have an account?</small>
          </p>
          <a className="btn btn-secondary" href="#">
            Create an account
          </a>
        </form>

        <p className="footer">
          <small>
            <strong>©</strong> 2014 - {new Date().getFullYear()}{' '}
            <a className='link'
              href="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
              target="_blank"
              rel="noreferrer"
            >
              Inspinia
            </a>{' '}
            By <span className="fw-bold">WebAppLayers</span>
          </small>
        </p>
      </div>
    </div>
  );
};

export default App;
