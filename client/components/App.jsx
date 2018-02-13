import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './homePage/HomePage.jsx';
import NavBar from '../components/common/NavBar.jsx';
import SideBar from '../components/common/SideBar.jsx';
import PersonsList from '../components/persons/PersonsList.jsx';
import PersonForm from './persons/PersonForm.jsx';
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
                <Route path="/persons" component={PersonsList} />
                <Route path="/person/:id" component={PersonForm} />
                <Route path="/person" component={PersonForm} />
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
