import React, { Component } from 'react';


export default class BackCard extends Component {



  render() {
    let bio = this.props.bio || ""
    console.log(bio)
    let bioSm = bio.substring(0,120)+ "..."
    // if (this.props.bio !== "" ) {
    //    debugger
    //    bioSm = this.props.bio.sub(0,120) + "..."
    // }else {
    //    bioSm = this.props.bio
    // }
    // const bioSm = bio.str.sub(0,120) + "..."
    return (
      <div className="card-back">
        <h1> </h1>

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
