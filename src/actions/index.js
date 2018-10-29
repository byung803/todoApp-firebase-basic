import database from '../firebase/firebase';

export const addTodo = (text, id) => ({
    type: 'ADD_TODO',
    id,
    text
})

export const startAddTodo = (text) => {
    return (dispatch) => {
        return database.ref('/todos').push({ text, completed: false }).then((snapshot) => {
            dispatch(addTodo(text, snapshot.key));
        }).catch((e) => {
            console.log('Error startAddTodo', e)
        })
    }
}


export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
})

export const startRemoveTodo = (id) => {
    return (dispatch) => {
        return database.ref(`/todos/${id}`).remove()
            .then(() => {
                dispatch(removeTodo(id));
            }).catch((e) => {
                console.log('error startRemoveTodo', e)
            })
    }
}

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const startSetVisibilityFilter = (filter) => {
    return (dispatch) => {
        return database.ref('/filter').set(filter)
            .then(() => {
                dispatch(setVisibilityFilter(filter));
            }).catch((e) => {
                console.log("startSetVisibilityFilter Error", e)
            })
    }
}


export const visibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const startToggleTodo = (id, completed) => {
    return (dispatch) => {
        database.ref(`/todos/${id}`).update({ completed: !completed })
            .then(() => {
                dispatch(toggleTodo(id));
            }).catch((e) => {
                console.log("startToggleTodo Error", e)
            })
    }
}

export const setTodos = (todos) => ({
    type: 'SET_TODOS',
    todos
})

export const startSetTodos = () => {
    return (dispatch) => {
        return database.ref().once("value")
            .then((dataSnapshot) => {
                let todos = [];
                let filter = dataSnapshot.child('filter').val();

                dataSnapshot.child('todos').forEach((childSnapshot) => {
                    todos.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                })

                dispatch(setTodos(todos));
                dispatch(setVisibilityFilter(filter));

            }).catch((e) => {
                console.log('error startsettodos', e);
            })
    }
}