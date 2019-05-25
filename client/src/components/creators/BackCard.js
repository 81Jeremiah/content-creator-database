import React, { Component } from 'react';


export default class BackCard extends Component {

  render() {
    const bio = this.props.bio || ""
    // console.log(bio)
    const bioSm = bio.substring(0,120)+ "..."

    return (
    <div className="card-back">
      <p className="bio">Bio: {bioSm}</p>
      <h5 className="platform">Main Platform: {this.props.platform}</h5>
      <h5 className="category">Category: {this.props.category}</h5>
    </div>
    )
  }
}

BackCard.defaultProps = {
  bio: ""
}
