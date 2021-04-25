const initialState = [
  {
    id: 1,
    todo: "Compran pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
    // es la unica manera de cambiar el estado, no se puede hacer peticiones asincronas, no puede disparar efectos secundarios siempre tiene q resolverse con los argumentos de la funcion y siempre retorna un nuevo estado
  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }

  return state;
};

let todo = todoReducer();

// no usar push en react
const newTodo = {
  id: 2,
  todo: "Comprar huevos",
  done: false,
};

// action
const action = {
  type: "agregar",
  payload: newTodo,
};

todo = todoReducer(todo, action);

console.log({ todo });
