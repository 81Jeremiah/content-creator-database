import React, { Component } from 'react';
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateTrending } from '../../actions/creatorActions'
import TrendButton from './TrendButton'
class CreatorCard extends Component {

  // constructor(props) {
  //        super(props)
  //
  //         this.state = {
  //           trending: this.props.trending,
  //           id: this.props.id
  //         }
  //
  // }
  //
  //
  // handleClick = () =>{
  //   this.setState({
  //     trending: this.state.trending + 1
  //   }, () => {
  //   //setting this in callback function to send sate properly
  //   const creatorId = this.state.id
  //   const trending = this.state.trending
  //   this.props.updateTrending(creatorId, trending)
  //     }
  //   )
  // }




  render() {
    const image = this.props.image
    const imageURL = image.url || {}
    return (
      <div >

      <Link to={{
          pathname: `/creators/${this.props.id}`}}>
      {/* <Route exact path={`creators/${this.props.id}`}  render={routerProps => <CreatorPage creators={this.props} {...routerProps} /> }/> */}

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
// export default connect (null,{ updateTrending })(CreatorCard)
export default CreatorCard
