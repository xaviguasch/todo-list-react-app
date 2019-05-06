import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.removeTodo(this.props.id)
  }

  render() {
    return (
      <div>
        <p>{this.props.task}</p>
        <button onClick={this.handleClick}>X</button>
      </div>
    )
  }
}

export default Todo
