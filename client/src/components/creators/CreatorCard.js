import React, { Component } from 'react';
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';

export default class CreatorCard extends Component {

  constructor(props) {
         super(props)
          this.state = {
            trending: this.props.trending
          }
  }
  handleClick = () =>{
    this.setState({
      trending: this.props.trending + 1
    })
    this.updateTrending(props)
  }

  render() {

    return (
      <div>
        <div className="creator-card">
          <FrontCard name={this.props.name} trending={this.state.trending}/>
          <BackCard mostPopularVideo={this.props.mostPopularVideo} category={this.props.category}/>
        </div>
            <button className="trend-button" onClick={this.handleClick}>trend</button>

      </div>

    )
  }
}
