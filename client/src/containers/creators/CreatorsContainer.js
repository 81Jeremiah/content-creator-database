import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCreators } from '../../actions/creatorActions';
import Creators from '../../components/creators/Creators';

class CreatorsContainer extends Component {

  componentDidMount(){
    this.props.fetchCreators()

  }

  render() {
    return (
      <div>
        <h1 class="page-header"> TOP CREATORS </h1>
        <Creators creatorObjects={this.props.creators} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    creators: state.creators
   }
 }


export default connect(mapStateToProps, { fetchCreators })(CreatorsContainer);
