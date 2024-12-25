let mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  StoreName: {
    type: String,
    required: true, 
  },
  StoreLocation_location: [
    {
      type: String, 
    },
  ],
  Store_Address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Store', storeSchema);
