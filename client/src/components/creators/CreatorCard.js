import React, { Component } from 'react';
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';
import { Link } from 'react-router-dom';
import TrendButton from './TrendButton'
class CreatorCard extends Component {

  render() {
    const image = this.props.image
    const imageURL = image.url || {}
    return (
      <div >

      <Link to={{
          pathname: `/creators/${this.props.id}`}}>

        <div className="creator-card" >

          <FrontCard name={this.props.name} trending={this.props.trending} image={imageURL} />
          <BackCard bio={this.props.bio} category={this.props.category} platform={this.props.platform} />
        </div>

        </Link>
         <TrendButton trending ={this.props.trending} id={this.props.id} />
      </div>

    )
  }
}

export default CreatorCard
