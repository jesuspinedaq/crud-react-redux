import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/personsListAction';

class PersonsList extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToAddPerson = this.redirectToAddPerson.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadPersons();
  }

  redirectToAddPerson() {
    this.props.history.push('person');
  }

  handleDelete(event, id) {
    console.log('delete');
    event.preventDefault();
    this.props.actions.deletePersons(id, this.props.history.push);
  }

  render() {
    return (
      <div>
        <h1>Persons list</h1>
        <button
          className="btn btn-primary"
          onClick={this.redirectToAddPerson}
        >
          Add person
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Last name</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {this.props.persons.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><Link className="nav-link" to={"person/" + person.id}>{person.first_name}</Link></td>
                  <td>{person.last_name}</td>
                  <td>{person.city}</td>
                  <td>{person.state}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={event => this.handleDelete(event, person.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    persons: state.persons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList);
