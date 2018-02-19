import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/usersListAction';
import UserList from './UserList.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToAddUser = this.redirectToAddUser.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadUsers();
  }

  redirectToAddUser() {
    this.props.history.push('user');
  }

  handleDelete(event, id) {
    console.log('delete');
    event.preventDefault();
    this.props.actions.deleteUsers(id, this.props.history.push);
  }

  render() {
    return (
      <UserList
        redirectToAddUser={this.redirectToAddUser}
        users={this.props.users}
        handleDelete={this.handleDelete}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
