import mongoose from "mongoose";

const girlSchema = mongoose.Schema({
  name : String,
  megaLink : String,
  girlPhoto : String,
})

const postMessage = mongoose.model('girlSchema' , girlSchema);

export default postMessage