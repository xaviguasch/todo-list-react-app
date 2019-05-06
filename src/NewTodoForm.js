import React, { Component } from 'react'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoText: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.createToDo(this.state)
    this.setState({ todoText: '' })
  }

  handleChange(evt) {
    this.setState({
      todoText: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='todoText'>Your new To-Do: </label>
            <input
              type='text'
              name='todoText'
              id='todoText'
              value={this.state.todoText}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewTodoForm
