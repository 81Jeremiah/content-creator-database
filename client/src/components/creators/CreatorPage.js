// import React, { Component } from 'react';
//
//
// export default class CreatorPage extends Component {
//   render() {
//     return(
//       <div>
//       tets
//         <h1>Hello Friend{this.props.creator.creator_name} </h1>
//
//       </div>
//
//     )
//   }
// }
// import React from 'react';
// const CreatorPage = props => {
//   return (
//     <div>
//      <p>{this.props.creator_name}</p>
//     </div>
//   )
// }
//
// export default CreatorPage

import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreatorDetails from './CreatorDetails';
import { fetchCreator } from '../../actions/creatorActions';

class CreatorPage extends Component {

  componentDidMount = () => {
    const creatorId = this.props.match.params.id
    this.props.fetchCreator(creatorId)

    console.log(creatorId)
  }

  render() {
    return(
      <div>
        <CreatorDetails creator={this.props.creator} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)
  debugger
  return { creator: state.creators.creator}
}

export default connect(mapStateToProps, {fetchCreator })(CreatorPage);
