const todos = (state = [], action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return action.todos;
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'REMOVE_TODO':
            return state.filter((todo) => (
                todo.id !== action.id
            ))
        case 'TOGGLE_TODO':
            return state.map((todo) => (
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            ))
        default:
            return state;
    }
}

export default todos;