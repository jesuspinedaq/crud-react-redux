const initialState = {
  persons: [
    {
      id: 1, first_name: 'name1', last_name: 'lasname1', city: 'city1', state: 'state1',
    },
    {
      id: 2, first_name: 'name2', last_name: 'lasname2', city: 'city2', state: 'state2',
    },
    {
      id: 3, first_name: 'name3', last_name: 'lasname3', city: 'city3', state: 'state3',
    },
    {
      id: 4, first_name: 'name4', last_name: 'lasname4', city: 'city4', state: 'state4',
    },
  ],
  actualPerson: {
    first_name: 'name4', last_name: 'lasname4', city: 'city4', state: 'state4',
  },
};

export default initialState;
