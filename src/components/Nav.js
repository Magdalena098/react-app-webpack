import React, { Component } from 'react';
import axios from 'axios';
import Places from './Places';
import FormTemplate from './Forms';

class Nav extends Component {

	constructor(props){
		super(props);
		this.state = {
		  location: '',
		  venuesData: null
		};
	}

	updateUserInput(event) {
		this.setState({
		  location : event.target.value
		})
	} 

	getUrl() {
	  const clientSecret = 'ULPJL0F3A21YZ5E5HRVQAT5AKY01GPYZWEY04MOODBFFE2FV',
	  clientId = 'PW5C3IEI4A1QJOPAFBOVI4FH1L2T4SDAYEOG01XXSFLBCXDC';
	  let location = this.state.location,
	  version = 'v=20170601',
	  url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&near=' + location + '&' + version;
      return url;
	}

	searchPlaces(event) {
		event.preventDefault();
		let url = this.getUrl();

		axios.get(url).then(response => {
         let venuesData = response.data.response.groups[0].items;
         this.setState( { venuesData:venuesData } );
		});
	}

	render(){
       return (
       	<section>
       	 <FormTemplate action={this.searchPlaces.bind(this)} value={this.updateUserInput.bind(this)} />
       	 {
       	 	this.state.venuesData != null ? <Places data={this.state.venuesData} /> : null
       	 }
       	</section>
       	);
	}
}

export default Nav