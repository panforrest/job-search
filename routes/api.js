// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */

router.get('/job', function(req, res){

    turbo.fetch('job', null)
    .then(data => {
    	res.json({
    	    confirmation: 'success',
    	    data: data	
    	})
    	
    })
    .catch(err => {
    	res.json({
    		confirmation: 'fail',
    		message: err.message || 'Oops! Something went wrong!'
    	})

    })
})

// router.get('/:resource', function(req, res){
// 	res.json({
// 		confirmation: 'success',
// 		resource: req.params.resource,
// 		query: req.query // from the url query string
// 	})
// })

router.get('/:resource/:id', function(req, res){
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})

router.post('/job', function(req, res){

    turbo.create('job', req.body)  //PROMISE
    .then(data => {
    	res.json({
    	    confirmation: 'success',
    	    data: data	
    	})
    	
    })
    .catch(err => {
    	res.json({
    		confirmation: 'fail',
    		message: err.message || 'Oops! Something went wrong!'
    	})

    })

    // res.json({
    // 	confirmation: 'success',
    // 	body: req.body
    // })
})



module.exports = router
