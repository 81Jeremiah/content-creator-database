import React from 'react'

const BackCard = props => {

    const bio = props.bio || ""
    // console.log(bio)
    const bioSm = bio.substring(0,120)+ "..."

    return (
    <div className="card-back">
      <p className="bio">Bio: {bioSm}</p>
      <h5 className="platform">Main Platform: {props.platform}</h5>
      <h5 className="category">Category: {props.category}</h5>
    </div>
    )
    
}

export default BackCard
