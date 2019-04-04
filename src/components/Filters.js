import React from 'react'

class Filters extends React.Component {

  changeHandler= (e) => {
    this.props.onChangeType(e.target.value);
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onFindPetsClick();
  }

  render() {
    return (
      <form className="ui form" onChange={this.changeHandler} onSubmit={this.submitHandler}>
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button">Find pets</button>
        </div>
      </form>
    )
  }
}

export default Filters
