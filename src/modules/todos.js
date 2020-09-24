// actions
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// action creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: Date.now(),
    text,
    done: false,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// initial state
const initialState = [];

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.todo, ...state];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
