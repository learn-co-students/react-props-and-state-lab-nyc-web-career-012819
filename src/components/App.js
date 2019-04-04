import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  componentDidMount = () => {
    fetch('/api/pets')
    .then(resp => resp.json())
    .then(pets => this.setState({pets: pets}))
  }

  typeChanged = e => {
    this.setState({filters: {type: e.target.value}})
  }

  clickHandler = () => {
    if (this.state.filters.type === 'all') {
      this.componentDidMount()
    } else if (this.state.filters.type === 'dog') {
        fetch('/api/pets?type=dog')
          .then(resp => resp.json())
          .then(dogs => this.setState({pets: dogs}))
    } else if (this.state.filters.type === 'cat') {
        fetch('/api/pets?type=cat')
        .then(resp => resp.json())
        .then(cats => this.setState({pets: cats}))
    } else if (this.state.filters.type === 'micropig') {
        fetch('/api/pets?type=micropig')
        .then(resp => resp.json())
        .then(micropigs => this.setState({pets: micropigs}))
    }
  }

  changeAdoptStatus = e => {
    const foundPet = this.state.pets.find(petObj => petObj.id === e)
    foundPet.isAdopted = !foundPet.isAdopted
    this.setState({})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.typeChanged} onFindPetsClick={this.clickHandler}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdopt={this.changeAdoptStatus}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
