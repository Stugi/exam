const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const url = 'mongodb://localhost:27017';

let db;
mongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    return console.err(err);
  }
  global_mongo_client = client;
  db = global_mongo_client.db('exam');
});

exports.getTrns = function(cb) {
  let collection = db.collection("trn");
  collection.find().toArray((err, results) => {
    if (err) cb(err);
    cb(null, results);
  });
}
exports.getUsers = function(cb) {
  let collection = db.collection("user");
  const filter = {};
  const projection = {
    'login': 1,
    'displayname': 1
  };

  collection.find(filter, {
    projection: projection
  }).toArray((err, results) => {
    if (err) cb(err);
    cb(null, results);
  });
}

exports.createTrn = function(dataclient, cb) {
  let collection = db.collection("trn");
  collection.insertOne({
    name: "",
    descr: "",
    datemod: dataclient.datemod,
    user: "currentUser",
    procent: 100,
    questions: []
  }, (err, results) => {
    if (err) cb(err);
    cb(null, {
      _id: results.insertedId,
      name: "",
      descr: "",
      datemod: dataclient.datemod,
      user: "currentUser",
      procent: 100,
      questions: []
    });
  });
}

exports.updateTrn = function(dataclient, cb) {

  let collection = db.collection("trn");
  let ObjectID = require('mongodb').ObjectID;

  collection.updateOne({
    _id: ObjectID(dataclient._id)
  }, {
    $set: {
      name: dataclient.name,
      descr: dataclient.descr,
      questions: dataclient.questions,
      datemod: dataclient.datemod,
      user: dataclient.user,
      procent: dataclient.procent,
      needQ: dataclient.needQ


    }
  }, (err, results) => {
    if (err) {
      cb(err)
    };
    cb(null, results);
  });
}
exports.insertTrnUser = function(dataclient, cb) {

  let collection = db.collection("trnuser");
  let ObjectID = require('mongodb').ObjectID;
  console.log(dataclient);
  collection.insertMany(
    dataclient, (err, results) => {
      if (err) {
        cb(err)
      };
      cb(null, results);
    });
}

let crypto = require('crypto');
const salt = "uniq";

exports.findUser = function(login, cb) {
  let users = db.collection("user");
  users.find().toArray((err, results) => {
    if (err) cb(err);
    for (let i = 0; i < results.length; i++) {
      if (login === results[i].login)
        return cb(null, results[i]);
    }
    return cb(null, null);
  });

};
exports.createUsers = function(login, callback) {
  let users = [{
    login: 'ivan',
    admin: false,
    password: crypto
      .createHash('sha512')
      .update(salt + '1111')
      .digest('hex')
  }, {
    login: 'miron',
    admin: true,
    password: crypto
      .createHash('sha512')
      .update(salt + '12345')
      .digest('hex')
  }];
  let collection = db.collection("user");
  collection.insertMany(users, (err, results) => {
    if (err) cb(err);
    cb(null, results);
  });
};
