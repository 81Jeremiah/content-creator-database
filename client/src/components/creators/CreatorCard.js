import React from 'react'
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';
import { Link } from 'react-router-dom';
import TrendButton from './TrendButton'

const CreatorCard = props =>{

    const image = props.image
    const imageURL = image.url || {}
    return (
      <div >

      <Link to={{
          pathname: `/creators/${props.id}`}}>

        <div className="creator-card" >

          <FrontCard name={props.name} trending={props.trending} image={imageURL} />
          <BackCard bio={props.bio} category={props.category} platform={props.platform} />
        </div>

        </Link>
         <TrendButton trending ={props.trending} id={props.id} />
      </div>

    )
  }

export default CreatorCard
