import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from './store';


class App extends Component {




  render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/forgot" component={Forgot}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/change_password" component={ChangePassword}/>
        {/* <Route path="*" component={NoMatch}/> */}
        </div>
      </Router>
      </PersistGate>
   </Provider>
    );
  }
}

export default App;
