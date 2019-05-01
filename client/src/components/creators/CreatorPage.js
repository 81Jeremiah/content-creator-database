import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CreatorDetails from './CreatorDetails';
import { deleteCreator, fetchCreator } from '../../actions/creatorActions';

class CreatorPage extends Component {
  state = {
    isDeleted: false
  }

  componentDidMount = () => {
    const recipeId = this.props.match.params.id
    this.props.fetchRecipe(recipeId)
  }

  handleDeleteCreator = event => {
    this.props.deleteRecipe(this.props.creator.id)
    this.setState({
      isDeleted: true
    })
  }

  render() {
    if (this.state.isDeleted === true){
      return <Redirect to="/" />
    }

    return(
      <div>
        <CreatorDetails creator={this.props.creator} handleDeleteRecipe={this.handleDeleteRecipe}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { creator: state.creator}
}

export default connect(mapStateToProps, { deleteCreator, fetchCreator })(CreatorPage);
