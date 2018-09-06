const {MongoClient, ObjectID}= require('mongodb');


const dbName ='TodoApp';
MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
     if(err){
        return console.log('Unable to connect to MongoDB Server');
     }

     console.log('Connected to Mongo DB Server');

    client.db(dbName).collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b8e6a8c2b02cd1248a0f1a5")
    },{
        $set:{
            name:"Jaswanth",
            location:"Bheemavaram"
        },
        $inc:{
          age:1
        }
    },{
        returnOriginal :false
    }).then((result) =>{
        console.log(result);

    });

    client.close();
});