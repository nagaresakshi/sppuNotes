import React from 'react';

export default function Loginpage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-5">
        <div className="card pb-3">
          <div className="card-header">
            <h3 className="text-center">Login</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password"/>
              </div>
              <button type="submit" className="btn btn-primary btn-block px-3 mt-2">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
