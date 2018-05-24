import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from '../actions';


class Header extends Component {



  constructor(props) {
      super(props);
      this.state = {
            user: props.user
      };
      this.logout = this.logout.bind(this);
  }



    logout(){
         this.props.logOut();
         this.props.history.push("/")
    }

    componentWillReceiveProps(nextProps){
          let {user} = nextProps;
          this.setState({user});
    }



  render() {
    let {user} = this.state;
   console.log("user data in render is  --  "+JSON.stringify(user));
    return (
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a className="navbar-brand brand-logo" onClick={()=>{this.props.history.push("/")}}><img src="/images/logo.svg" alt="logo" /></a>
          <a className="navbar-brand brand-logo-mini" onClick={()=>{this.props.history.push("/")}}><img src="/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <img className="img-xs rounded-circle" src="../../images/faces/face4.jpg" alt />
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <div className="dropdown-item">
                  <p className="mb-0 font-weight-normal float-left">{user.username}
                  </p>
                  <span className="badge badge-info badge-pill float-right" onClick={this.logout}><a style={{cursor:'pointer'}}>Logout</a></span>
                </div>
                <div className="dropdown-divider" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(connect(state => {
  return { user: state.user.user };
}, actions)(Header));
