import React from 'react'

const CardFront = props => {

  return (

    <div className="card-front">
      <h1 className="creator-name"> {props.name} </h1>
      <img className="background-image" src={props.image} alt="background" />
      <h3 className="trending"> Trend Meter:{props.trending}</h3>

    </div>
  )


}
export default CardFront
