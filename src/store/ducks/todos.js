/**
 * Types
 */
export const Types = {
  ADD: "ADD_TODO"
};

/**
 * Reducer
 */
const INICIAL_STATE = {
  data: []
};

export default function todos(state = INICIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return { data: [...state.data, action.payload.todo] };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  addTodo: todo => ({
    type: Types.ADD,
    payload: { todo }
  })
};