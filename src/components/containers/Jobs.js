import React, { Component } from 'react'
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
import superagent from 'superagent'

class Jobs extends Component {
    constructor(){
    	super()
    	this.state = {
    		jobs: [
    		    // {id:0, title:'TEST', description:'this is a test job'},
    		    // {id:1, title:'TEST 2', description:'this is a test job 2.1'}
 
    		]
    	}
    }

    componentDidMount(){
    	// console.log('componentDidMount: ')
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
        let list = this.state.jobs.map((job, i) => {
        	return(
		        <li key={i}>
		            <div style={style.jobPost}>
		                <h4>{job.title}</h4>
		                <p>{job.description}</p>

		            </div>
	            </li>
        	)
        })

		return(
			<div>
			    <div className="row">
                    <div className="col-md-8">
                        <ol>					    
                            {list}
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