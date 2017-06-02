import React, { Component } from 'react';

class Places extends Component {
	
	render(){
    
		return (
          <div>
            <ul>
              {
                this.props.data.map((value, i) => {
                  return (
                    <li key={i}>
                      <h2>{value.venue.name}</h2>
                      <p>{value.venue.location.address}</p>
                      <p>{value.venue.location.city}</p>
                    </li>
                  );
                })
              }
            </ul>
          </div>
		    )
	    }
    }

export default Places