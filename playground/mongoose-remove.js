const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5b912c8da124b90c88d57030'}).then((todo) => {

// });

Todo.findByIdAndRemove('5b912c8da124b90c88d57030').then((todo) => {
  console.log(todo);
});
