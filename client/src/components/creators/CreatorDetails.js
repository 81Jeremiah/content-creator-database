import React from 'react';


const CreatorDetails = props => {
  const {creator_name, bio, platform, category, trending } = props.creator

  //sets the default image prop to empty objext
  const image = props.image || {}
  const imageUrl = image.url

  return (
    <div className="">
      <img className="profile-pic" src={imageUrl} alt="creator" />
      <h2 className="">
        { creator_name }
      </h2>

      <h4> { platform } </h4>
      <h4> { category } </h4>
      <h4>Trend Meter: {trending} </h4>
      <p> { bio } </p>

    </div>
  )
}


export default CreatorDetails
