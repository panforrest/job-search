import React, { Component } from 'react'
import superagent from 'superagent'

class Preview extends Component {
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

			    <ol>{					    
                    this.state.jobs.map((job, i) => {
			        	return(
					        <li key={i}>
					            <div style={style.jobPost}>
					                <h4>{job.title}</h4>
					                <p>{job.description}</p>

					            </div>
				            </li>
			        	)
                    })
                }   
                </ol>


			</div>

		)
	}
}

export default Preview