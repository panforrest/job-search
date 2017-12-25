import React, { Component } from 'react'
import {Jobs} from './containers'

class Feed extends Component {
	render(){
		return (
			<div className="container">
			    <h2>This is the Feed Component!</h2>
			    <h3>Current Jobs</h3>
			    <Jobs />

                


			    
			</div>
		)
	}
}



export default Feed