import React, { Component } from 'react';
import CreatorCard from '../../components/creators/CreatorCard.js'


export default class Creators extends Component {

  buildCreatorCards = () => {
    const creatorsArray = this.props.creatorObjects.creators
    console.log(creatorsArray)
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
     debugger
     return creators
   }

  render() {
    return (
      <div id="creator-grid">
       {this.buildCreatorCards()}
      </div>
    )
  }
}
