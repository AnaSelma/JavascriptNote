const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote', {
  // useCreatendex: true, 
  // useFindAndModify: false, 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}).then(() => console.log('Connection Succesfull'))
.catch((err) => console.log(err))