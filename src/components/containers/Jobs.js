import React, { Component } from 'react'

class Jobs extends Component {
    constructor(){
    	super()
    	this.state = {
    		jobs: [
    		    {id:0, title:'TEST', description:'this is a test job'},
    		    {id:1, title:'TEST 2', description:'this is a test job 2.1'}
 
    		]
    	}
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