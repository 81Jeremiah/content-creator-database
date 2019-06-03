import React, { Component } from 'react';
import CreatorList from './CreatorList'

import { connect } from 'react-redux'

class SearchResults extends Component {

   render() {
     return (
      <div>
       <CreatorList creators={this.props.creators} />
      </div>
     )
   }
}

const mapStateToProps = state => {
  return {
       creators: state.search.foundCreators
   }
}

export default connect(mapStateToProps)(SearchResults)
