import React from 'react';


const CreatorDetails = props => {
  const { creator_name } = props.creator

  return (
    <div className="">
    <h2 className="">
      { creator_name }
    </h2>

      <p>

      </p>

    </div>
  )
}

export default CreatorDetails
