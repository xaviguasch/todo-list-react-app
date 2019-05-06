import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import uuid from 'uuid/v4'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
  }

  create(todo) {
    const newTodo = { ...todo, id: uuid() }
    this.setState(st => ({
      todos: [...st.todos, newTodo]
    }))
  }

  remove(todoId) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    })
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.todoText} key={todo.id} id={todo.id} removeTodo={this.remove} />
    })
    return (
      <div>
        <h1>TodoList Component</h1>
        <NewTodoForm createToDo={this.create} />
        {todos}
      </div>
    )
  }
}

export default TodoList
