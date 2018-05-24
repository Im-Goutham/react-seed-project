import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import * as actions from '../actions';


const baseurl = "http://10.2.1.49:5037/api"

class Login extends Component {


  constructor(props) {
      super(props);
      this.state = {
          error: null,
          email:"",
          password:""
      };
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     this.setState({ [event.target.name]: event.target.value });
   }


  login(){
    var self =this;
    let {email,password} = this.state;
    if(email.trim()=="" || password.trim()==""){
          self.setState({error:"All feilds are required"})
          return false;
    }
    console.log("email is  "+email+" password is "+password);
    try {
        let data = {email:email,password:password};
        this.props.signIn(data, (response) => {
              let {data}=response;
              if(data.status == 1){
                   self.setState({error:null,email:"",password:""})
                   swal("Login successful");
                   self.props.history.push("/dashboard")
              }
              else {
                 console.log("error is "+data.message);
                   self.setState({error: data.message});
              }
              console.log("response is "+JSON.stringify(response));
        }).catch(error => {
          return error;
        });
    } catch (err) {
        console.log("error is "+JSON.stringify(err));
    }
  }


  render() {
   let {error} = this.state;
    return (

      <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
              <div className="content-wrapper d-flex align-items-center auth login-full-bg">
                <div className="row w-100">
                  <div className="col-lg-4 mx-auto">
                    <div className="auth-form-dark text-left p-5">
                      <h2>Login</h2>
                      <form className="pt-5">
                      {
                         (error)?(
                               <div className="alert alert-danger" role="alert">{error}</div>
                         ):(null)
                      }
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"  name="email" onChange={this.handleChange}/>
                          <i className="mdi mdi-account" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  name="password" onChange={this.handleChange}/>
                          <i className="mdi mdi-eye" />
                        </div>
                        <div className="mt-5">
                          <a className="btn btn-block btn-warning btn-lg font-weight-medium" onClick={this.login}>Login</a>
                        </div>
                        {/*
                          <div className="mt-3 text-center">
                            <a onClick={() => {this.props.history.push("/forgot")}} className="auth-link text-white">Forgot password?</a>
                          </div>
                          <div className="mt-3 text-center">
                            <a onClick={() => {this.props.history.push("/signup")}} className="auth-link text-white">New user?</a>
                          </div>
                           */}

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

export default connect(null, actions)(withRouter(Login));
