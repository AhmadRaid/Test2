const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  withdrawId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "withdraw",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  requestType:{
    type:String,
    required: true
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
},
{ timestamps: true },
);
const request = mongoose.model("Request", requestSchema);
module.exports = request;
