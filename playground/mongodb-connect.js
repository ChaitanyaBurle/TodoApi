const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

var obj = new ObjectID();
console.log(obj);
var user ={name:'chaitanya', age:21};
var {name}=user;
console.log(name);
const dbName ='TodoApp';
MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
     if(err){
        return console.log('Unable to connect to MongoDB Server');
     }

     console.log('Connected to Mongo DB Server');

     db.collection('Todos').insertOne({
        text:'something to do',
        completed : false 
     },(err,result)=>{
         if(err){
            return console.log('Unable to insert todo',err);
         }
         console.log(JSON.stringify(result.ops,undefined,2));
     });

    client.db(dbName).collection('Users').insertOne({
        _id:4178,
        name:'ganesh',
        age:23,
        location:'vizianagaram'
    },(err,result)=>{
        if(err){
            return console.log('unable to connected to USers',err);
            
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimestamp());
    })
     client.close();
});