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

  changeTypeHandler = (selectedType) => {
    let newType = {...this.state.filters}
    newType.type = selectedType;
    this.setState({filters: newType}, ()=>{console.log('AFTER WE UPDATE STATE', this.state)})
  }

  findPetsHandler = () => {
    let selectedPet = this.state.filters.type;
    if(selectedPet === "all"){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(type => this.setState({pets: type}))
    } else {
      fetch(`/api/pets?type=${selectedPet}`)
      .then(resp => resp.json())
      .then(type => this.setState({pets: type}))
    }
  }

  // changeAdoptHandler = (petId) => {
  //   console.log(petId);
  // }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={selectedType => this.changeTypeHandler(selectedType)} onFindPetsClick={findTerm => this.findPetsHandler()}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

// onAdoptPet={petId => this.changeAdoptHandler(petId)}
