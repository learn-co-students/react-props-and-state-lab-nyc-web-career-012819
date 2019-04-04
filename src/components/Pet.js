import React from 'react'

class Pet extends React.Component {
  state = {
    isAdopted: this.props.pet.isAdopted
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({isAdopted: !this.props.pet.isAdopted})
    console.log(this.props);
  }

  render() {
    return (
      <form className="card" onSubmit={this.submitHandler}>
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male"? "♀" : "♂"}
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
        <div className="extra content" >
          {this.state.isAdopted ? <button className="ui disabled button" >Already adopted</button> : <button className="ui primary button">Adopt pet</button>}
        </div>
      </form>
    )
  }
}

export default Pet
