import React, { Component } from 'react';
import CreatorCard from '../../components/creators/CreatorCard.js'


export default class Creators extends Component {

  render() {
    return (
      <div id="creator-grid">
      <CreatorCard

        name={'some douchy name'}
        trending={'this guy sucks'}
        mostPopularVideo={'some stupid shit'}
        category={'vlogger'} />
      </div>
    )
  }
}
