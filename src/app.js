import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Nav, Places, Forms } from './components'

class App extends Component {

	render(){
		return (
           <div>
              <Nav />
           </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))