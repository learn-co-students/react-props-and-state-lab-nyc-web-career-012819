import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    let pets = this.props.pets.map((petObj) => {
      return <Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdoptPet} />
    })

    return (
    <div className="ui cards">
      {pets}
    </div>)
  }
}

export default PetBrowser
