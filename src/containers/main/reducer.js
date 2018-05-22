
/* Import Third Party Dependencies */
import { fromJS } from 'immutable';


const initialState = fromJS({
  todos: [
    {
      id: '1',
      title: 'first task for today',
    },
    {
      id: '2',
      title: 'the second task, wow that\'s going so fast',
    }
  ]
});


function mainReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainReducer;
