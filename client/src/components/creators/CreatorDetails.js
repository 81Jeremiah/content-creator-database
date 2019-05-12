import React from 'react';


const CreatorDetails = props => {
  const creator_name = props.creator_name
  const image = props.image || {}
  const imageUrl = image.url
  
  return (
    <div className="">
    <h2 className="">
      { creator_name }
    </h2>

      <p>

        <img src={imageUrl} alt="creator" />
      </p>

    </div>
  )
}

export default CreatorDetails
