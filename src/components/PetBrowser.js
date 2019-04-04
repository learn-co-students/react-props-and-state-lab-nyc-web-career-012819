import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  // onAdoptPet = (info) => {
  //   console.log("in browser", info)
  //   this.props.onAdoptPet(info)
  // }

  render() {
    console.log("in petbrowser", this.props.pets)
    let petsArray = this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />)
    return <div className="ui cards">{petsArray}</div>
  }
}

export default PetBrowser
