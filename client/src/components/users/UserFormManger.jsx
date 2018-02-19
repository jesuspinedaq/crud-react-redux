import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/usersListAction';
import UserForm from './UserForm.jsx';

class UserFormManager extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);

    this.state = {
      user: Object.assign({}, this.props.user),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ user: Object.assign({}, nextProps.user) });
  }

  handleChange(event) {
    event.preventDefault();
    const field = event.target.name;
    const { user } = this.state;
    user[field] = event.target.value;
    return this.setState({ user });
  }

  save(event) {
    event.preventDefault();
    this.props.actions.save(this.state.user, this.props.history.push);
  }

  render() {
    return (
      <UserForm
        user={this.state.user}
        handleChange={this.handleChange}
        save={this.save}
      />
    );
  }
}

function getUserById(users, userId) {
  const userRetVal = users.filter(user => user.id == userId);
  if (userRetVal.length) {
    return userRetVal[0];
  }
  return null;
}

function mapStateToProps(state, ownprops) {
  const userId = ownprops.match.params.id;
  let user = {
    first_name: '', last_name: '', city: '', state: '',
  };

  if (userId && state.users.length > 0) {
    user = getUserById(state.users, userId);
  }
  return {
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFormManager);
