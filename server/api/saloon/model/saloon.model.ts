import * as mongoose from 'mongoose';

var schema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  services: [
    {
      name: {
        type: String,
        required:true
      },
      price: {
        required: true,
        type: Number
      },
      discount: {
        size: {
          type: Number,
          required: true
        },
        name: {
          type: String,
          required: true,
        }
      }
    }
  ]
});

export default schema;
