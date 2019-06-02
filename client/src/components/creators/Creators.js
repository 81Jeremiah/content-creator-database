import React from 'react'
import CreatorCard from '../../components/creators/CreatorCard.js'

const Creators = props => {
    const creatorsArray = props.creatorObjects.creators

    const creators = creatorsArray.map(creator =>
    <CreatorCard

      key={creator.id}
      id={creator.id}
      name={creator.creator_name}
      trending={creator.trending}
      platform={creator.platform}
      category={creator.category}
      bio={creator.bio}
      image={creator.image} />

    );
    return (
      <div id="creator-grid">
       { creators }
      </div>
    )
  }


export default Creators
