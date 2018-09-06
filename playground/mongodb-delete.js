const {MongoClient, ObjectID}= require('mongodb');


const dbName ='TodoApp';
MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
     if(err){
        return console.log('Unable to connect to MongoDB Server');
     }

     console.log('Connected to Mongo DB Server');

    //  client.db(dbName).collection('Users').deleteMany({_id:4177}).then((result) =>{
    //      console.log(result);
    //  });
    
    // client.db(dbName).collection('Users').deleteOne({name:'chaitanya'}).then((result) =>{
    //     console.log(result);
    // });


    // client.db(dbName).collection('Users').findOneAndDelete({name:'chaitanya'}).then((result) =>{
    //     console.log(result);
    // });


    client.db(dbName).collection('Users').deleteMany({name:'chaitanya'}).then((result) =>{
        console.log(result);
    });

    client.db(dbName).collection('Users').findOneAndDelete({
        _id : new ObjectID("5b89274fa291760a54a5774f")
    }).then((results)=>{
        console.log(JSON.stringify(results,undefined,2));
    });

    client.close();
});