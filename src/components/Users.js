import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Sidebar from './Sidebar';


class Users extends Component {



  constructor(props) {
      super(props);
      this.state = {
           usersList: props.usersList,
           sortOrder : {
                 _id:0,
                 firstname:0,
                 lastname:0,
                 username:0,
                 emailId:0,
                 mobile:0
           }
      };
      this.changeSort = this.changeSort.bind(this);
  }

  componentWillReceiveProps(newprops){
     let {usersList} = newprops;
     console.log("users list is "+JSON.stringify(usersList));
     this.setState({usersList});
  }

  changeSort(type,order){
       let {sortOrder} = this.state;
       if(sortOrder[type]==0){
           sortOrder[type]=1
       }
       else if(sortOrder[type]==1) {
             sortOrder[type]=-1
       }
       else if(sortOrder[type]==-1) {
             sortOrder[type]=0
       }
       this.setState({sortOrder})
       this.props.sortOrder(sortOrder);
  }

  render() {
   let {usersList,sortOrder} = this.state;
    console.log("sortOrder render is "+JSON.stringify(sortOrder));
    return (
      <div style={{overflowX:'auto'}}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th data-sortable="true">
              User ID
                  <span style={{float:'right'}}>
                      {
                           (sortOrder._id==0)?(
                                    <i className="fas fa-sort" onClick={this.changeSort.bind(this,"_id",1)}/>
                           ):(
                                (sortOrder._id==1)?(
                                      <i className="fas fa-sort-up"  onClick={this.changeSort.bind(this,"_id",-1)}/>
                                ):(
                                       <i className="fas fa-sort-down"  onClick={this.changeSort.bind(this,"_id",1)}/>
                                )
                           )
                      }
                  </span>
            </th>
            <th>
              Firstname
              <span style={{float:'right'}}>
                  {
                       (sortOrder.firstname==0)?(
                                <i className="fas fa-sort" onClick={this.changeSort.bind(this,"firstname",1)}/>
                       ):(
                            (sortOrder.firstname==1)?(
                                  <i className="fas fa-sort-up" onClick={this.changeSort.bind(this,"firstname",-1)}/>
                            ):(
                                   <i className="fas fa-sort-down" onClick={this.changeSort.bind(this,"firstname",1)}/>
                            )
                       )
                  }
              </span>
            </th>
            <th>
              Lastname
              <span style={{float:'right'}}>
                  {
                       (sortOrder.lastname==0)?(
                                <i className="fas fa-sort"  onClick={this.changeSort.bind(this,"lastname",1)}/>
                       ):(
                            (sortOrder.lastname==1)?(
                                  <i className="fas fa-sort-up"  onClick={this.changeSort.bind(this,"lastname",-1)}/>
                            ):(
                                   <i className="fas fa-sort-down"  onClick={this.changeSort.bind(this,"lastname",1)}/>
                            )
                       )
                  }
              </span>
            </th>
            <th>
              Username
              <span style={{float:'right'}}>
                  {
                       (sortOrder.username==0)?(
                                <i className="fas fa-sort"  onClick={this.changeSort.bind(this,"username",1)}/>
                       ):(
                            (sortOrder.username==1)?(
                                  <i className="fas fa-sort-up"  onClick={this.changeSort.bind(this,"username",-1)}/>
                            ):(
                                   <i className="fas fa-sort-down"  onClick={this.changeSort.bind(this,"username",1)}/>
                            )
                       )
                  }
              </span>
            </th>
            <th>
              Email
              <span style={{float:'right'}}>
                  {
                       (sortOrder.emailId==0)?(
                                <i className="fas fa-sort"  onClick={this.changeSort.bind(this,"emailId",1)}/>
                       ):(
                            (sortOrder.emailId==1)?(
                                  <i className="fas fa-sort-up" onClick={this.changeSort.bind(this,"emailId",-1)}/>
                            ):(
                                   <i className="fas fa-sort-down"  onClick={this.changeSort.bind(this,"emailId",1)}/>
                            )
                       )
                  }
              </span>
            </th>
            <th>
              Mobile
              <span style={{float:'right'}}>
                  {
                       (sortOrder.mobile==0)?(
                                <i className="fas fa-sort"  onClick={this.changeSort.bind(this,"mobile",1)}/>
                       ):(
                            (sortOrder.mobile==1)?(
                                  <i className="fas fa-sort-up"  onClick={this.changeSort.bind(this,"mobile",-1)}/>
                            ):(
                                   <i className="fas fa-sort-down"  onClick={this.changeSort.bind(this,"mobile",1)}/>
                            )
                       )
                  }
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
         {
             (usersList && usersList.length>0)?(
                    usersList.map((user,key)=>{
                    return  <tr>
                        <td className="py-1">
                             {user._id}
                        </td>
                        <td>
                             {user.firstname}
                        </td>
                        <td>
                             {user.lastname}
                        </td>
                        <td>
                             {user.username}
                        </td>
                        <td>
                             {user.emailId}
                        </td>
                        <td>
                             {user.mobile}
                        </td>
                      </tr>
                    })
             ):(null)
         }
        </tbody>
      </table>
      </div>
    );
  }
}

export default withRouter(Users);
