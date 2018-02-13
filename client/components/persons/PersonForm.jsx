import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/personsListAction';

class PersonForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);

    this.state = {
      person: Object.assign({}, this.props.person),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ person: Object.assign({}, nextProps.person) });
  }

  handleChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const { person } = this.state;
    person[field] = event.target.value;
    return this.setState({ person });
  }

  save(event) {
    event.preventDefault();
    this.props.actions.save(this.state.person, this.props.history.push);
  }

  render() {
    return (
      <div>
        <h1>Person form</h1>
        <form>
          <div className="form-group">
            <label htmlFor="first_name">Name</label>
            <input
              id="first_name"
              name="first_name"
              className="form-control"
              type="text"
              value={this.state.person.first_name}
              onChange={this.handleChange}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last name</label>
            <input
              id="last_name"
              name="last_name"
              className="form-control"
              type="text"
              value={this.state.person.last_name}
              onChange={this.handleChange}
              placeholder="Enter Last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              className="form-control"
              value={this.state.person.city}
              onChange={this.handleChange}
              placeholder="City"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              type="text"
              className="form-control"
              value={this.state.person.state}
              onChange={this.handleChange}
              placeholder="State"
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={this.save}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function getPersonById(persons, personId) {
  const personRetVal = persons.filter(person => person.id == personId);
  if (personRetVal.length) {
    return personRetVal[0];
  }
  return null;
}

function mapStateToProps(state, ownprops) {
  const personId = ownprops.match.params.id;
  let person = {
    first_name: '', last_name: '', city: '', state: '',
  };

  if (personId && state.persons.length > 0) {
    person = getPersonById(state.persons, personId);
  }
  return {
    person,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonForm);
