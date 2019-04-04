import React from 'react'

class Pet extends React.Component {
  
  // onAdoptPet = (petInfo) => {
  //   console.log("in pet", petInfo)
  //   this.props.onAdoptPet(petInfo)
  // };
  
  render() {
    let petInfo = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {petInfo.gender === 'female' ? '♀🂽 ' : '♂🂾 '}
            {petInfo.name}
          </a>
          <div className="meta">
            <span className="date">{petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {petInfo.age}</p>
            <p>Weight: {petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={petInfo.isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
          <button className={petInfo.isAdopted ? "ui disabled button" : "ui primary button"} onClick={() => this.props.onAdoptPet(this.props.pet)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
