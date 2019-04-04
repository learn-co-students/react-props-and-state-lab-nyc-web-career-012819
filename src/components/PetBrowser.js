import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const pets = this.props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdopt} isAdopted={petObj.isAdopted}/>)
    return <div className="ui cards">{pets}</div>
  }
}

export default PetBrowser
