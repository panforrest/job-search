        // let list = this.state.jobs.map((job, i) => {
        // 	return(
		      //   <li key={i}>
		      //       <div style={style.jobPost}>
		      //           <h4>{job.title}</h4>
		      //           <p>{job.description}</p>

		      //       </div>
	       //      </li>
        // 	)
        // })
import React, { Component } from 'react'
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
import superagent from 'superagent'
import { Preview } from './../presentation'

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
                        <Preview />
                        
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