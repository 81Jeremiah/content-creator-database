import React, { Component } from 'react';
import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';

export default class CreatorCard extends Component {

  state = {
    trending: 0
  }

  handleClick = () =>{
    this.setState({
      trending: this.state.trending + 1
    })
  }

  render() {

    return (
      <div>
        <div className="creator-card">
          <FrontCard name={this.props.name} trending={this.state.trending}/>
          <BackCard mostPopularVideo={this.props.mostPopularVideo} category={this.props.category}/>
        </div>
            <button className="div-button" onClick={this.handleClick}>trend</button>

      </div>

    )
  }
}
