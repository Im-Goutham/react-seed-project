import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Sidebar from "./Sidebar";


class ChangePassword extends Component {



  constructor(props) {
      super(props);
      this.state = {

      };


  }


  render() {
    return (
      <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
              <div className="content-wrapper d-flex align-items-center auth login-full-bg">
                <div className="row w-100">
                  <div className="col-lg-4 mx-auto">
                    <div className="auth-form-dark text-left p-5">
                      <h2>Forgot Password</h2>
                      <form className="pt-5">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Password</label>
                          <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password" />
                          <i className="mdi mdi-account" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Confirm password</label>
                          <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="confirmpassword"/>
                          <i className="mdi mdi-account" />
                        </div>
                        <div className="mt-5">
                          <a className="btn btn-block btn-warning btn-lg font-weight-medium">Submit</a>
                        </div>
                        <div className="mt-3 text-center">
                          <a onClick={() => {this.props.history.push("/login")}} className="auth-link text-white">Login</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
            </div>
            {/* page-body-wrapper ends */}
          </div>
    );
  }
}

export default withRouter(ChangePassword);
