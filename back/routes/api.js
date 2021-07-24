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

router.get('/mytrns', (req, res, next)=>{
	model.getMyTrns(req.user,(err, result)=>{
		if(err)
			return res.status(500).end();
		res.json(result);
	});
});


router.put('/mytrn', (req, res, next)=>{
	if(typeof req.body.idtrn != "string" || !req.body.idtrn) return res.status(400).end();

	model.startMyTrn(req.body.idtrn, (err, result)=>{
		if(err)
			return res.status(500).end();

			let set = {"state.state":1,"state.name":"В процессе"}
			model.updateTrnUser(req.body.idtrn,set, (err, result)=>{
				if(err)
					return res.status(500).end();
			});


			res.json(result);
		});

	});
router.put('/mytrnres', (req, res, next)=>{
	let set = {"state.state":2,"state.name":"Завершен", "result":req.body.result}
	model.updateTrnUser(req.body.idtrn,set, (err, result)=>{
		if(err)
			return res.status(500).end();
		res.json(result);
	});
	});

router.get('/users', (req, res, next)=>{
	model.getUsers((err, result)=>{
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
router.put('/trnuser', (req, res, next)=>{
	model.insertTrnUser(req.body.trns, (err, result)=>{
		if(err)
			return res.status(500).end();
		res.json(result);
	});
});
module.exports = router;

// router.put('/createUsers', (req, res, next)=>{
	// 	model.createUsers((err, result)=>{

		// 		if(err)
		// 			return res.status(500).end();
		// 		res.json(result);
		// 	});
		// });
