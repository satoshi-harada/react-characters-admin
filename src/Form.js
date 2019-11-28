import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      team: '',
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, team } = this.state
  
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>名前</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}/>
        <label>チーム</label>
        <input
          type="text"
          name="team"
          value={team}
          onChange={this.handleChange}/>
        <button type="submit">
          登録
        </button>
      </form>
    )
  }
}


export default Form