import React from 'react';

export default function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header my-2">
            <h3 className="text-center">Sign Up</h3>
          </div>
          <div className="card-body mb-2">
            <form>
              <div className="form-group mb-2">
                <label htmlFor="name">Name :</label>
                <input type="text" className="form-control mt-1" id="name" placeholder="Enter Full name"/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="mobile">Mobile Number :</label>
                <input type="text" className="form-control mt-1" id="mobile" placeholder="Enter mobile number"/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="username">Username :</label>
                <input type="text" className="form-control mt-1" id="username" placeholder="Enter Unique username"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password :</label>
                <input type="password" className="form-control mt-1" id="password" placeholder="Enter Strong password"/>
              </div>
              <button type="submit" className="btn btn-primary btn-block rounded-pill px-4">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
