import React, { Component } from 'react';
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateTrending } from '../../actions/creatorActions'
class CreatorCard extends Component {

  constructor(props) {
         super(props)

          this.state = {
            trending: this.props.trending,
            id: this.props.id
          }

  }


  handleClick = () =>{
    this.setState({
      trending: this.state.trending + 1
    })

     const creatorId = this.state.id
     console.log(creatorId)
     const trending = this.state.trending
     console.log(trending)

     this.props.updateTrending(creatorId, trending)
  }




  render() {
    const image = this.props.image
    console.log(image)
    const imageURL = image.url || {}
    return (
      <div >

      <Link to={{
          pathname: `/creators/${this.props.id}`}}>
      {/* <Route exact path={`creators/${this.props.id}`}  render={routerProps => <CreatorPage creators={this.props} {...routerProps} /> }/> */}

        <div className="creator-card" >

          <FrontCard name={this.props.name} trending={this.state.trending} image={imageURL} />
        <BackCard mostPopularVideo={this.props.mostPopularVideo} category={this.props.category} />
        </div>

        </Link>
        <button className="trend-button" onClick={this.handleClick}>trend</button>
      </div>

    )
  }
}
export default connect (null,{ updateTrending })(CreatorCard)
