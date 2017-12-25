import React, { Component } from 'react'

class Feed extends Component {
	render(){
		return (
			<div>
			    <h2>This is the Feed Component!</h2>
			    <h3>Current Jobs</h3>
			    <ol>
			        <li>
			            <div style={style.jobPost}>
			                <h4>Graphic Designer</h4>
			                <p>Need someone to create a logo!</p>

			            </div>
                    </li>

                    <li>
                        <div style={style.jobPost}>
			                <h4>Programmer</h4>
			                <p>Need someone to create my startup website!</p>

			            </div>
    
                    </li>

                    <li>

                        <div style={style.jobPost}>
			                <h4>Marketer</h4>
			                <p>Need someone to promote my startup website!</p>

			            </div>

                    </li>
			    </ol>
			</div>
		)
	}
}

const style={
	jobPost: {
		padding: 16,
		background: '#f9f9f9',
		border: '1px solid #ddd',
		marginBottom: 24
	}
}

export default Feed