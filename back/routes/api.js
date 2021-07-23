const express = require('express');
const router = express.Router();

const model = require('../model/model.js');


router.get('/trns', (req, res, next)=>{
	model.getTrns((err, result)=>{
		if(err)
			return res.status(500).end();
		res.json(result);
	});
});
router.get('/user', (req, res, next)=>{
	model.findUser(req,(err, result)=>{
		if(err)
			return res.status(500).end();
		res.json(result);
	});
});


router.post('/createtrn', (req, res, next)=>{

	if(typeof req.body.dataclient.datemod != "string" || !req.body.dataclient.datemod) return req.status(400).end();

	model.createTrn(req.body.dataclient, (err, result)=>{
		if(err)
			return res.status(500).end();
		res.json(result);
	});
});

router.put('/updatetrn', (req, res, next)=>{
	model.updateTrn(req.body.dataclient, (err, result)=>{
		if(err)
			return res.status(500).end();
		res.json(result);
	});
});
module.exports = router;

// router.put('/createUsers', (req, res, next)=>{
	// 	model.createUsers((err, result)=>{
		// 		console.log("zdec");
		// 		if(err)
		// 			return res.status(500).end();
		// 		res.json(result);
		// 	});
		// });
