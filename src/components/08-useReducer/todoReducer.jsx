export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((state) => state.id !== action.payload.id);
    case "toggle":
      return state.map((todo) =>
          (  todo.id === action.payload.id ? {...todo,done: !todo.done} : todo)// return implicito
      ); 
    case "toggle-old":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
      
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
