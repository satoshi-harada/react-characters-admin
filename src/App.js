import React, {Component} from 'react'
import './App.css';
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: []
  }
  
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]})
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <h1>React Characters Admin</h1>
        <p>チームメンバーを管理するReactアプリ</p>
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
