const { Schema, model } = require("mongoose");

const topicSchema = new Schema({
  title: {
    type: String,
    required: [true, "'Title' field is empty, please fill it up"]
  },
  content: {
    type: String,
    required: [true, "'Content' field is empty, please fill it up"]
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Topic', topicSchema)