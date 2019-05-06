import React, { Component } from 'react';
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import  CreatorPage  from './CreatorPage'


export default class CreatorCard extends Component {

  constructor(props) {
         super(props)

          this.state = {
            trending: this.props.trending
          }
          debugger
  }


  handleClick = () =>{
    this.setState({
      trending: this.state.trending + 1
    })
    // this.updateTrending(props)
  }

  handleCreatorClick = () =>{
    alert("you've clicked me")
  }

  render() {

    return (
      <div >

      <Link to={{
          pathname: `/creators/${this.props.id}`}}>
      {/* <Route exact path={`creators/${this.props.id}`}  render={routerProps => <CreatorPage creators={this.props} {...routerProps} /> }/> */}

        <div className="creator-card" >

          <FrontCard name={this.props.name} trending={this.state.trending}/>
          <BackCard mostPopularVideo={this.props.mostPopularVideo} category={this.props.category}/>
        </div>

        </Link>
        <button className="trend-button" onClick={this.handleClick}>trend</button>
      </div>

    )
  }
}
