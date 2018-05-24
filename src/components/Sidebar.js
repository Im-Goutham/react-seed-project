import React, { Component } from 'react';
import {withRouter} from "react-router-dom";



class Sidebar extends Component {



  constructor(props) {
      super(props);
      this.state = {

      };


  }


  render() {
    let {page} = this.props;
    return (
        <ul className="nav-menu">
          <li className={page == "dashboard" ? "active" : ""} onClick={() => {this.props.history.push("/dashboard")}}><a>Dashboard</a></li>
          <li className={page == "manage_outlets" ? "active" : ""} onClick={() => {this.props.history.push("/manage_outlets")}}><a>Manage Outlets</a></li>
          <li className={page == "manage_jobs" ? "active" : ""}  onClick={() => {this.props.history.push("/manage_jobs")}}><a>Manage Jobs</a></li>
          <li className={page == "manage_brands" ? "active" : ""} onClick={() => {this.props.history.push("/manage_brands")}}><a>Manage Brands</a></li>
          <li className={page == "manage_clients" ? "active" : ""} onClick={() => {this.props.history.push("/manage_clients")}}><a>Manage Clients</a></li>
          <li className={page == "manage_users" ? "active" : ""} onClick={() => {this.props.history.push("/manage_users")}}><a>Manage Users</a></li>
          <li className={page == "manage_suppliers" ? "active" : ""} onClick={() => {this.props.history.push("/manage_suppliers")}}><a>Manage Suppliers</a></li>
        </ul>
    );
  }
}

export default withRouter(Sidebar);
