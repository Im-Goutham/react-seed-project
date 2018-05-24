import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Sidebar from './Sidebar';


class Profile extends Component {



  constructor(props) {
      super(props);
      this.state = {
           user: props.user,
           firstname:"",
           lastname:"",
           username:"",
           emailId:"",
           mobile:"",
           password:""
      };
        this.handleChange = this.handleChange.bind(this);
        this.updateProfile = this.updateProfile.bind(this);

  }

  componentWillReceiveProps(newprops){
      let {user} = newprops;
      let {firstname,lastname,username,emailId,mobile} = user;
      this.setState({user,firstname,lastname,username,emailId,mobile})

  }

  handleChange(event) {
     this.setState({ [event.target.name]: event.target.value });
   }


   updateProfile(){

   }


  render() {
    let {page} = this.props;
    let {user,firstname,lastname,username,emailId,mobile} = this.state;
    console.log("user data in profile  "+JSON.stringify(user))
    return (
      <section id="content-area">
        <div className="container height">
          <div className="col-md-12 col-sm-12 col-xs-12 no-padd clearfix height">
            <div className="col-md-2 col-sm-3 col-xs-12 left-menu">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-9 col-xs-12 right-content">
              <h1 className="main-heading">Manage Profile</h1>
              <ol className="breadcrumb">
                <li><a href="dashboard.html">Home</a></li>
                <li className="active">Manage Profile</li>
              </ol>
              <h2 className="sub-heading">Manage Profile</h2>
              <div className="col-md-12 col-sm-12 col-xs-12 clearfix steps-block">
                <div className="col-md-12 col-sm-12 col-xs-12 clearfix steps-content">
                  <div className="col-md-8 col-sm-12 col-xs-12 form-block">
                    <form>
                      <div className="form-control">
                        <label><em className="important">*</em>First Name:</label>
                        <input type="text" name="firstname" value={firstname} onChange={this.handleChange}/>
                      </div>
                      <div className="form-control">
                        <label><em className="important">*</em>Last Name:</label>
                        <input type="text" name="lastname" value={lastname}  onChange={this.handleChange}/>
                      </div>
                      <div className="form-control">
                        <label><em className="important">*</em>Username:</label>
                        <input type="text" name="username" value={username}  onChange={this.handleChange}/>
                      </div>
                      <div className="form-control">
                        <label><em className="important">*</em>Email:</label>
                        <input type="text" name="emailId"  value={emailId} onChange={this.handleChange}/>
                      </div>
                      <div className="form-control">
                        <label><em className="important">*</em>Mobile:</label>
                        <input type="text" name="mobile"  value={mobile} onChange={this.handleChange}/>
                      </div>
                      <div className="button-control">
                        <button type="button" name="submit" className="btn" onClick={this.updateProfile}>Save</button>
                        <button name="cancel" className="btn btn-cancel"  onClick={() => {this.props.history.push("/manage_profile")}}>Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Profile);
