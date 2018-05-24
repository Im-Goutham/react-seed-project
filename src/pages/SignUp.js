import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


const baseurl = "http://10.2.1.49:5037/api"

class SignUp extends Component {



  constructor(props) {
      super(props);
      this.state = {
           firstname:"",
           lastname:"",
           username:"",
           email:"",
           mobile:"",
           password:"",
           error:null
      };

      this.handleChange = this.handleChange.bind(this);
      this.signUp = this.signUp.bind(this);
  }

  handleChange(event) {
     this.setState({ [event.target.name]: event.target.value });
   }

   signUp(){
     var self =this;
     let {firstname,lastname,username,email,mobile,password} = this.state;

     if(email.trim()=="" || password.trim()=="" || firstname.trim()=="" || lastname.trim()=="" || username.trim()=="" || mobile.trim()==""){
           self.setState({error:"All feilds are required"})
           return false;
     }
         axios.post(baseurl+'/register', {
               firstname: firstname,
               lastname: lastname,
               username: username,
               email: email,
               mobile: mobile,
               password: password
             })
             .then(function (response) {
               let {data}=response;
               console.log("response is "+JSON.stringify(response));
               if(data.status == 1){
                    self.setState({error:null,firstname:"",lastname:"",username:"",email:"",mobile:"",password:""})
                    swal(data.data+" : "+email);
                    self.props.history.push("/")
               }
               else {
                  console.log("error is "+data.message);
                    self.setState({error: data.message});
               }

             })
             .catch(function (error) {
                console.log("error is "+JSON.stringify(error));
             });
   }

  render() {
    let {error} = this.state;
    return (

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth register-full-bg">
            <div className="row w-100">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <h2>Register</h2>
                  <h4 className="font-weight-light">Hello! lets get started</h4>
                  <form className="pt-4">
                    {
                       (error)?(
                             <div className="alert alert-danger" role="alert">{error}</div>
                       ):(null)
                    }
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Firstname</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Firstname"  name="firstname" onChange={this.handleChange}/>
                      <i className="mdi mdi-account" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Lastname</label>
                      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"  name="lastname" onChange={this.handleChange}/>
                      <i className="mdi mdi-eye" />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="password" className="form-control"  placeholder="Username"  name="username" onChange={this.handleChange}/>
                      <i className="mdi mdi-eye" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="Email"  name="email" onChange={this.handleChange}/>
                      <i className="mdi mdi-eye" />
                    </div>
                    <div className="form-group">
                      <label>Mobile</label>
                      <input type="password" className="form-control" placeholder="Mobile"  name="mobile" onChange={this.handleChange}/>
                      <i className="mdi mdi-eye" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password"  name="password" onChange={this.handleChange}/>
                      <i className="mdi mdi-eye" />
                    </div>
                    <div className="mt-5">
                      <a className="btn btn-block btn-primary btn-lg font-weight-medium"  onClick={this.signUp}>Register</a>
                    </div>
                    <div className="mt-2 w-75 mx-auto">
                      <div className="form-check form-check-flat">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          I accept terms and conditions
                        </label>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <a className="auth-link text-black">Already have an account? <span className="font-weight-medium" onClick={() => {this.props.history.push("/")}}>Sign in</span></a>
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

export default withRouter(SignUp);
