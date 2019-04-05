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

    this.onChangeType = this.onChangeType.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
    this.adoptPet = this.adoptPet.bind(this);
  }

  onChangeType(animal) {
    this.setState({
      filters: { ...this.state.filters, type: animal }
    });
  }

  fetchPets() {
    const API_URL = (this.state.filters.type === 'all') ?
      '/api/pets' :
      `/api/pets?type=${this.state.filters.type}`;

    fetch(API_URL)
      .then(response => response.json())
      .then(json => { this.setState({ pets: json }) })
  }

  adoptPet(petId) {
    const index = this.state.pets.findIndex(pet => pet.id === petId);
    const updatedPets = [...this.state.pets];
    updatedPets[index].isAdopted = true;
    this.setState({ pets: updatedPets });
  }

  render() {
    console.log('Rendering now')
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
