import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateTrending } from '../../actions/creatorActions'

class TrendButton extends Component {

  constructor(props) {
         super(props)

          this.state = {
            trending: this.props.trending || "",
            id: this.props.id || ""
          }

  }
//checks for updates in state and renders is trend was updated in store
  componentDidUpdate()  {
    if (this.state.trending !== this.props.trending  )
    this.setState({
      trending: this.props.trending,
      id: this.props.id
    })
  }


  handleClick = () =>{
    this.setState({
      trending: this.state.trending + 1
    }, () => {
    //setting this in callback function to send sate properly
    const creatorId = this.state.id
    const trending = this.state.trending
    this.props.updateTrending(creatorId, trending)
      }
    )
  }

  render() {
    return(

      <button className="trend-button" onClick={this.handleClick}>trend</button>
   )
  };
}
export default connect (null,{ updateTrending })(TrendButton)
