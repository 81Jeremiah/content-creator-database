import React, { Component } from 'react';
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';

export default class CreatorCard extends Component {

  render() {

    return (
      <div className="creator-card">
        <FrontCard name={this.props.name} trending={this.props.trending}/>
        <BackCard mostPopularVideo={this.props.mostPopularVideo} category={this.props.category}/>
      </div>
    )
  }
}
