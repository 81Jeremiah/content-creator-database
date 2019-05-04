import React from 'react';

const CreatorDetails = props => {
  const { name, image, platform, bio, video, catrgory, collabsWith } = props.creator

  return (
    <div className="tc ph4">
    <h2 className="f3 f2-m f1-l fw2 black-90 mv3">
      { name }
    </h2>

      <p>
        { image }
      </p>

      <p>
        { platform }
      </p>

      <div>
        <label> </label>
      </div>

      <div>
        <label></label>
        <p>
          { bio }
        </p>
      </div>

      // <button  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green" onClick={props.handleDeleteRecipe}>
      //   Delete creator
      // </button>

    </div>
  )
}

export default CreatorDetails
