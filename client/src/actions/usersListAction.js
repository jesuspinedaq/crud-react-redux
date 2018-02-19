import * as actionTypes from './actionTypes';
import * as userService from '../services/userService';

export function loadUserSuccess(users) {
  return { type: actionTypes.LOAD_USERS_SUCCESS, payload: users };
}

export function saveUserSuccess(user) {
  return { type: actionTypes.SAVE_USERS_SUCCESS, payload: user };
}

export function updateUserSuccess(user) {
  return { type: actionTypes.UPDATE_USERS_SUCCESS, payload: user };
}

export function deleteUserSuccess(userId) {
  return { type: actionTypes.DELETE_USERS_SUCCESS, payload: userId };
}

export function loadUsers() {
  return function disp(dispatch) {
    userService.get()
      .then((users) => {
        dispatch(loadUserSuccess(users));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function save(user, redirect) {
  return function disp(dispatch) {
    if (user.id) {
      userService.update(user)
        .then((userUpdated) => {
          dispatch(updateUserSuccess(userUpdated));
          redirect('/users');
        })
        .catch((error) => {
          throw (error);
        });
    } else {
      userService.create(user)
        .then((userAdded) => {
          dispatch(saveUserSuccess(userAdded));
          redirect('/users');
        })
        .catch((error) => {
          throw (error);
        });
    }
  };
}

export function deleteUsers(userId, redirect) {
  return function disp(dispatch) {
    userService.remove(userId)
      .then(() => {
        dispatch(deleteUserSuccess(userId));
        redirect('/users');
      }).catch((error) => {
        throw (error);
      });
  };
}
