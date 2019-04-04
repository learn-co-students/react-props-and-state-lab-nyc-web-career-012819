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

  onAdoptPet = (id) => {
    const petArr = [...this.state.pets];

    let foundPet = petArr.find((petObj) => {
      return petObj.id === id
    });

    foundPet.isAdopted = true;

    this.setState({ pets: petArr })

  }

  onChangeType = (type) => {
    this.state.filters.type = type
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
      .then(resp => resp.json())
      .then((petObjs) => {
        let petsArr = [...petObjs]
        this.setState({pets: petsArr})
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then((petObjs) => {
        let petsArr = [...petObjs]
        this.setState({pets: petsArr})
      })
    }
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
