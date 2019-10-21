import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {
  state = {
    techs: [],
    newTech: ''
  }

  // When the component appears in the display
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({
        techs: JSON.parse(techs)
      })
    }
  }

  // When props or state are updated
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // When the component is destroyed
  componentWillUnmount() {
    // ...
  }

  handleInputChange = event => {
    this.setState({
      newTech: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech),
      newTech: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInputChange} value={this.state.newTech} />
        <button type="submit">Add</button>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem key={tech} tech={tech} handleDelete={this.handleDelete} />
          ))}
        </ul>
      </form>
    )
  }
}

export default TechList