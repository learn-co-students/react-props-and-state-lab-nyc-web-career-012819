import React from 'react'
import Pet from './Pet'


class PetBrowser extends React.Component {


  render() {
    return (
    <div className="ui cards">
      {this.props.pets.map(pet => <Pet
        key={pet.id}
        id={pet.id}
        name={pet.name}
        type={pet.type}
        gender={pet.gender}
        age={pet.age}
        weight={pet.weight}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={pet.isAdopted}
        />)}
    </div>
  )
  }
}

export default PetBrowser
