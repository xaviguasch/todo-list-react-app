import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
  }

  create(newTodo) {
    this.setState(st => ({
      todos: [...st.todos, newTodo]
    }))
  }

  remove(todoId) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    })
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask }
      }
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo task={todo.task} key={todo.id} id={todo.id} removeTodo={this.remove} updateTodo={this.update} />
      )
    })
    return (
      <div>
        <h1>TodoList Component</h1>
        <NewTodoForm createToDo={this.create} />
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default TodoList
