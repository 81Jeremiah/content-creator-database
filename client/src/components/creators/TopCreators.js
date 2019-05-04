import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCreators } from '../../actions/creatorActions';
import Creators from '../../containers/creators/Creators';

class TopCreators extends Component {

  componentDidMount(){
    this.props.fetchCreators()

  }

  render() {
    return (
      <div>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCreators: () => dispatch(fetchCreators())
//     }
//   }
export default connect(mapStateToProps, { fetchCreators })(TopCreators);
