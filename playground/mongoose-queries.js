
const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');

const {User} =require('./../server/models/user');

var id ='5b8e8eb6faf9ed2bf0ceac71';
if(!ObjectID.isValid(id)){
    console.log('ID not Valid');
}
Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id Not Found');
    }
    console.log('Todo By ID',todo);
}).catch((e)=>console.log(e));


User.findById("5b8e960020ba95165cffdd54").then((user)=>{
    if(!user){
        return console.log('Unable to find the User');
    }
    console.log(JSON.stringify(user,undefined,2));

},(e)=>{
    console.log(e);
});