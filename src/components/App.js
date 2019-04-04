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
  
  componentDidMount() {
    fetch('/api/pets')
    .then(r => r.json())
    .then(pets => this.setState({pets}))
  }

  onChangeType = (petType) => {
    // console.log('received: ', petType)
    this.setState({filters: {type: petType}})
  };

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      return fetch('/api/pets')
      .then(r => r.json())
      .then(pets => this.setState({pets}, console.log(this.state.filters.type, pets)))

    } else {
      return fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(r => r.json())
      .then(pets => this.setState({pets}, console.log(this.state.filters.type, pets)))
    }
  };

  // isAdopted = ()

  onAdoptPet = (pet) => {
    console.log('button clicked App file', pet, pet.id)
    //Copy array = this.state.pets
    //FoundPet

    let newArray = [...this.state.pets]
    newArray.forEach(petObj => {
      if (petObj.id === pet.id){
        petObj.isAdopted = true
      }
    })
    this.setState({pets: newArray})
    console.log(this.state.pets)
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
