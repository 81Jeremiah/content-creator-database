import React, { Component } from 'react';
import CreatorCard from '../../components/creators/CreatorCard.js'


export default class Creators extends Component {

  buildCreatorCards = () => {
    const creatorsArray = this.props.creatorObjects.creators
    const creators = creatorsArray.map(creator =>
    <CreatorCard
      key={creator.id}
      name={creator.creator_name}
      trending={creator.trending}
      mostPopularVideo={'some stupid shit'}
      category={'vlogger'} />
    );

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
