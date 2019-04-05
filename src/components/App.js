import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }


  componentDidMount(){
  fetch('/api/pets')
  .then(res => res.json())
  .then(pets => this.setState({pets: pets}))
}

onAdoptPet = (petId) => {
  let newPets = [...this.state.pets]
  newPets.forEach(pet => {
    return pet.id === petId
      ? pet.isAdopted = true
      : pet
  })
  this.setState({pets: newPets})
}


onChangeType = (petType) => {
    this.setState({ filters: {type: petType}})
}

onFindPetsClick = () => {
  console.log(this.state.filters)
  if (this.state.filters.type === "all") {
   return fetch('/api/pets')
  .then(res => res.json())
  .then(pets => this.setState({pets: pets})
)} else {
  return fetch(`/api/pets?type=${this.state.filters.type}`)
  .then(res => res.json())
  .then(pets => this.setState({pets: pets}))
  }
}


  render() {
    let pets = this.state.pets


    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
