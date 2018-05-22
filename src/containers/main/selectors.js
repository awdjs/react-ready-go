
/* Import Third Party Dependencies */
import { createSelector } from 'reselect';


const makeSelectTodos = () => createSelector(
  (state) => state.main,
  (subState) => subState.get('todos'),
);

export {
  makeSelectTodos,
};
