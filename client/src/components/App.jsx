import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './homePage/HomePage.jsx';
import NavBar from '../components/common/NavBar.jsx';
import SideBar from '../components/common/SideBar.jsx';
import UsersList from '../components/users/UsersListManager.jsx';
import UserForm from './users/UserFormManger.jsx';
// import 'bootstrap';
// import '../styles/dashboard.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/users" component={UsersList} />
                <Route path="/user/:id" component={UserForm} />
                <Route path="/user" component={UserForm} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.
// };

export default App;
