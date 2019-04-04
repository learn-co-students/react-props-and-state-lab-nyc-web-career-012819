import React from 'react'

class Pet extends React.Component {

  // state = {
  //   isAdopted: false
  // };//end of state

  sendId = () => {
    this.props.onAdoptPet(this.props.pet.id)
  };

  makeBtn = () => {
    if (this.props.pet.isAdopted === false) {
      return <button className="ui primary button" onClick={this.sendId}>Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }//end of method

  // changeAdopted = () => {
  //   this.setState({isAdopted: true})
  // };//end of method

  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.makeBtn()}
        </div>
      </div>
    )
  }
}

export default Pet
