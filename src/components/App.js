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

  onChangeType = (e) => {
    this.setState({filters: { type: e.target.value } }, () => console.log(this.state.filters.type))

  }//end of method

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(response => response.json())
      .then(animals => {
        let newArray = [...animals]
        this.setState({pets: newArray}, ()=>console.log(this.state.pets))
      })
    } else {
        fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(animals => {
          let newArray = [...animals]
          this.setState({pets: newArray}, ()=>console.log(this.state.pets))
        })
      }
  }//end of method

  onAdoptPet = (id) => {
    let newArray = [...this.state.pets]
    const foundPet = newArray.find(pet => pet.id === id)
    foundPet.isAdopted = true;
    this.setState({pets: newArray})
  };//end of method

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
