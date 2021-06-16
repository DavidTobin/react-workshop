export const initialState = {
  todos: [],
  addTodoText: ''
};

export const actions = {
  ADD_TODO: 'ADD_TODO',
  CHANGE_TODO: 'CHANGE_TODO'
}

export default function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [{ name: state.addTodoText, done: false }].concat(state.todos),
        addTodoText: ''
      };

    case actions.CHANGE_TODO:
      return {
        ...state,
        addTodoText: action.value
      };
    default:
      return state;
  }
}
