import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreatorDetails from '../../components/creators/CreatorDetails';
import { fetchCreator } from '../../actions/creatorActions';
import TrendButton from '../../components/creators/TrendButton'

class CreatorPage extends Component {

  componentDidMount = () => {
    const creatorId = this.props.match.params.id

    this.props.fetchCreator(creatorId)
  }

  componentDidUpdate = () => {
    const creatorId = this.props.match.params.id

    this.props.fetchCreator(creatorId)
  }

  render() {
    return(
      <div>
        <CreatorDetails creator={this.props.creator} image={this.props.image} />
        <TrendButton trending ={this.props.creator.trending} id={this.props.creator.id} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)

  return { creator: state.creators.creator, image: state.creators.creator.image}

}

export default connect(mapStateToProps, {fetchCreator })(CreatorPage);
