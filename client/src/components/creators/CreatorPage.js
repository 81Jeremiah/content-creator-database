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
        <CreatorDetails creator_name={this.props.creator.creator_name} image={this.props.creator.image} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)

  return { creator: state.creators.creator}
}

export default connect(mapStateToProps, {fetchCreator })(CreatorPage);
