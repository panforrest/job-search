import React, { Component } from 'react'

class Jobs extends Component {
	render(){
		return(
			<div>

			    <div className="row">
                    <div className="col-md-8">

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

                    <div className="col-md-4">

                    </div>

                </div>

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

export default Jobs