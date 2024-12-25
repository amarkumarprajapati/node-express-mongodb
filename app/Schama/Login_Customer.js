let mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  user_name: {
    type: String,
    required: true, 
  },
  password: {
    type:Number,
    require: true,
  },
  Store_Address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Login_Customer', storeSchema);
