import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petsArr = this.props.pets.map((petObj) => {
       return <Pet pet={petObj} key={petObj.id}/>
    })
    return (
      <div className="ui cards">
      {petsArr}
      </div>
    )
  }
}

export default PetBrowser
