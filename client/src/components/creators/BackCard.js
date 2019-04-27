import React, { Component } from 'react';


export default class BackCard extends Component {



  render() {
    return (
      <div className="card-back">
        <h3 className="most-pop-vid">{this.props.mostPopularVideo}</h3>
        <span />

        <span />
        <h5 className="category">{this.props.category}</h5>
      </div>
    )
  }
}
