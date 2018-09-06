const {MongoClient, ObjectID}= require('mongodb');


const dbName ='TodoApp';
MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
     if(err){
        return console.log('Unable to connect to MongoDB Server');
     }

     console.log('Connected to Mongo DB Server');
//      client.db(dbName).collection('Users').find({_id:new ObjectID('5b8929879eabec1d58927aed')}).toArray().then((docs)=>{
// console.log('Users');
// console.log(JSON.stringify(docs,undefined,2));
//      },(err)=>{
//          console.log('Unable to search Users',err);
//      });
// client.db(dbName).collection('Users').find().count().then((count)=>{
//     console.log(`Users Count :${count} `);
//     console.log(JSON.stringify(count,undefined,2));
//          },(err)=>{
//              console.log('Unable to search Users',err);
//          });


client.db(dbName).collection('Users').find({name:'chaitanya'}).toArray().then((docs)=>{
    console.log(`Users`);
    console.log(JSON.stringify(docs,undefined,2));
         },(err)=>{
             console.log('Unable to search Users',err);
         });
    
      client.close();
});