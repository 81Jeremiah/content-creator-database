import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (

      <div className="card-front">
      <h1 className="creator-name"> {this.props.name} </h1>
      <span />
      <h3 className="trending"> {this.props.trending}</h3>

      </div>
    )
  }
}
