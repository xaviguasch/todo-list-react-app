import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.createToDo({ ...this.state, id: uuid(), completed: false })
    this.setState({ task: '' })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='task'>Your new To-Do: </label>
          <input
            type='text'
            placeholder='New Todo'
            name='task'
            id='task'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </div>
      </form>
    )
  }
}

export default NewTodoForm
