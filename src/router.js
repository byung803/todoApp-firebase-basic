import React, { Component } from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodo from './containers/VisibleTodoList';
import Footer from './components/Footer';

class Router extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodo />
                <Footer />
            </div>
        );
    }
}

export default Router; 
