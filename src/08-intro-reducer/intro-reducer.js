const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type ==='[TODO] ADD_TODO') {
        return [...state, action.payload]
    }

    return state;
};

// siempre se retorna un nuevo estado

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] ADD_TODO',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

console.log({state: todos});

// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done: false
// })
