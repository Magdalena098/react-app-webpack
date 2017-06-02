import React, { Component } from 'react'

class FormTemplate extends Component {

	render () {
		return (
          <form>
            <input onChange={this.props.value} type="text" className="place" />
            <input onClick={this.props.action} type="submit" className="btn" />
          </form>
		)
	}
}

export default FormTemplate