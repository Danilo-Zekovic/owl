import mongoose from 'mongoose'

var testSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

export default mongoose.model('Test', testSchema);
