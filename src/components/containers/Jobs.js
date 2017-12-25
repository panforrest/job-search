// <Preview job={job} /> IS WRONG
// <Preview {...job} /> THE SAME AS 
import React, { Component } from 'react'
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
import superagent from 'superagent'
import { Preview } from '../presentation'

class Jobs extends Component {
    constructor(){
    	super()
    	this.state = {
    		jobs: []
    	}
    }

    componentDidMount(){
        superagent.get('/api/job')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) {
                console.log(err.message)
                return
            }

            const data = response.body.data
            console.log('componentDidMount: '+JSON.stringify(data))

            this.setState({
            	jobs: data
            })
        })
    }

	render(){
		return(
			<div>
			    <div className="row">
                    <div className="col-md-8">
                        <h3>Current Jobs</h3>
                        <ol>
                            { this.state.jobs.map((job, i) => {
                            	    return(
		                            	<li key={i}>
		                                    <Preview title={job.title} desctiption={job.desctiption}/>
		                            	</li>
		                            )
                                })
                            }
                        </ol>                        
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