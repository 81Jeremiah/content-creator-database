import React from 'react';
import { Link } from 'react-router-dom';

const CreatorList = props  => {


  const listCreators = props.creators.map( creator => {
    return(

      <li key={creator.id}>
      <img className="thumbnail" src={creator.image.url} alt="creator"/>
      <Link to={`creators/${creator.id}`}>{creator.creator_name}</Link>
      </li>)
    })
  return(
    <div>
       <ul >
         { listCreators }
       </ul>
    </div>
  )
}

CreatorList.defaultProps = {
  creators: []
}


export default CreatorList
