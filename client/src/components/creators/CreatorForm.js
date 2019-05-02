import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { createCreator} from '../../actions/creatorActions'

class CreatorForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      image: "",
      platform: "",
      bio: "",
      videos: [],
      category: [],
      collabsWith: []

    }
  }

  addIngredient = event => {
    event.preventDefault()
    const { ingredients, ingredient } = this.state;
    ingredients.push(ingredient)

    this.setState({
      ingredients,
      ingredient: ''
    }, () => console.log(ingredients))
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const recipe = this.state

    this.props.createRecipe(recipe)
    this.setState({
      isCreated: true
    })
  }

  render() {
    if (this.state.isCreated === true){
      return <Redirect to="/" />
    }
    const { creator } = this.state

    return(
      <div className="tc ph4">
      <h1 className="f3 f2-m f1-l fw2 black-90 mv3">Please add a new creator below</h1>

        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset className="ba b--transparent ph0 mh0">

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Name: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Image: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="name"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>


            <div className="mt3">
              <label className="db fw6 lh-copy f6">Platform: </label>
              <textarea
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="platform"
                value={this.state.platform}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Category: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="category"
                value={this.state.cuisine}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Video: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="video"
                value={this.state.video}
                onChange={this.handleChange}
              />

              <fieldset id="add_recipe" className="ba b--transparent ph0 mh0">
                <div className="">
                  <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green" onClick={this.addIngredient}>
                    Add
                  </button>
                </div>
              </fieldset>

            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Videos: </label>
              {
                this.state.videos.map(video =>
                  <ul className="list pl0 measure center">
                    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 dark-green">
                      {video}
                    </li>
                  </ul>
                )
              }
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Bio: </label>
              <textarea
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="instructions"
                value={this.state.bio}
                onChange={this.handleChange}
              />
            </div>

          </fieldset>

          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default CreatorForm = withRouter(connect(null, { createCreator })(CreatorForm));
