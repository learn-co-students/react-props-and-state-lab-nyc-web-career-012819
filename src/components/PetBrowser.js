import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petCards = this.props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdoptPet} />)
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
