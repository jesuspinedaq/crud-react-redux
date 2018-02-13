import * as actionTypes from './actionTypes';
import * as personService from '../services/personService';

export function loadPersonSuccess(persons) {
  return { type: actionTypes.LOAD_PERSONS_SUCCESS, payload: persons };
}

export function savePersonSuccess(person) {
  return { type: actionTypes.SAVE_PERSON_SUCCESS, payload: person };
}

export function updatePersonSuccess(person) {
  return { type: actionTypes.UPDATE_PERSON_SUCCESS, payload: person };
}

export function deletePersonSuccess(personId) {
  return { type: actionTypes.DELETE_PERSON_SUCCESS, payload: personId };
}

export function loadPersons() {
  return function disp(dispatch) {
    personService.get()
      .then((persons) => {
        dispatch(loadPersonSuccess(persons));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function save(person, redirect) {
  return function disp(dispatch) {
    if (person.id) {
      personService.update(person)
        .then((personUpdated) => {
          dispatch(updatePersonSuccess(personUpdated));
          redirect('/persons');
        })
        .catch((error) => {
          throw (error);
        });
    } else {
      personService.create(person)
        .then((personAdded) => {
          dispatch(savePersonSuccess(personAdded));
          redirect('/persons');
        })
        .catch((error) => {
          throw (error);
        });
    }
  };
}

export function deletePersons(personId, redirect) {
  return function disp(dispatch) {
    personService.remove(personId)
      .then(() => {
        dispatch(deletePersonSuccess(personId));
        redirect('/persons');
      }).catch((error) => {
        throw (error);
      });
  };
}
