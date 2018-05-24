import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import $ from 'jquery';
import Sidebar from  '../components/Sidebar';
import Header from  '../components/Header';
import Users from  '../components/Users';
import Pagination from 'rc-pagination';



const baseurl = "http://10.2.1.49:5037/api"



class Dashboard extends Component {



  constructor(props) {
      super(props);
      this.state = {
          user:{},
          auth:"",
          usersList:[],
          page:1,
          pagesize:3,
          total:0,
          currentPage:1,
          fileData:{},
          sortOrder : {
                _id:0,
                firstname:0,
                lastname:0,
                username:0,
                emailId:0,
                mobile:0
          }
      };
      this.usersList = this.usersList.bind(this);
      this.addUsers = this.addUsers.bind(this);
      this.getSortOrder = this.getSortOrder.bind(this);
  }


  componentDidMount(){
     let userData = localStorage.getItem("user");
     userData = JSON.parse(userData);
    console.log("user data in didmount is  --  "+JSON.stringify(userData));
    if(userData){
      let {data,access_token} = userData;
      this.setState({user:data,auth:access_token})
      this.usersList(access_token);
    }

  }


  usersList(auth){
     let self = this;
     let {page,pagesize} = this.state;
       let {sortOrder} = this.state;
       var sortData={}
        var x;
         for (x in sortOrder) {
           if(sortOrder[x]!=0){
               sortData[x]=sortOrder[x]
           }
         }

  console.log("sortOrder in fn "+JSON.stringify(sortData))
       var data = { page: page,pagesize: pagesize, sort: JSON.stringify(sortData)};
       fetch(baseurl+'/userListing' ,  {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
            'auth': auth
           },
           body : JSON.stringify(data)
        }).then(res => res.json()).then(function (response) {
            let {data,total}=response;
            self.setState({usersList: data,total})
             console.log("users list response is "+JSON.stringify(response));
         })
         .catch(function (error) {
              console.log("error is "+JSON.stringify(error));
           });
  }



   changePage(current, pageSize) {
      var page = current;
      var self =this;
      let {auth} = self.state;
      self.setState({currentPage: current});
      self.setState({page: page},()=>{
            this.usersList(auth);
      });
    }


  handleUploadFile = (event) => {

      const data = new FormData();
      data.append('file', event.target.files[0]);
      this.setState({fileData:data})

  }


  addUsers(){
    var data = {};
     let {auth,fileData} = this.state;
      console.log("auth is "+auth);
      console.log("fileData is "+fileData);
      fetch(baseurl+'/csvUpload' ,  {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json',
           'auth': auth
          },
          body : fileData
       }).then(res => res.json()).then(function (response) {
            console.log("csv response is "+JSON.stringify(response));
        })
        .catch(function (error) {
             console.log("error is "+JSON.stringify(error));
          });
  }


  getSortOrder(sortOrder){
      console.log("sortOrder is "+JSON.stringify(sortOrder))
      let {auth} = this.state;
      this.setState({sortOrder},()=>{
              this.usersList(auth);
      });

  }

  render() {
    let {usersList,currentPage,pagesize,total} = this.state;
    return (
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">

            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                  {/*

                        <input type="file" onChange={this.handleUploadFile} />
                        <button className="btb btn-success" onClick={this.addUsers}>Add users</button>


                    */}
                      <div className="card-body">
                   <Users usersList={usersList} sortOrder={this.getSortOrder}/>
                     </div>
                    <Pagination className="ant-pagination"
                              defaultCurrent={1}
                              current={currentPage}
                              defaultPageSize={3}
                              pageSize={pagesize}
                              total={total}
                              onChange={this.changePage.bind(this)}
                              showTitle={false}
                            />
                  </div>
                </div>
              </div>
            <footer className="footer">
              <div className="container-fluid clearfix">
                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018  All rights reserved.</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
