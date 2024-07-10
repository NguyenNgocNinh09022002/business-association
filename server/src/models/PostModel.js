const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostModel = new Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
    attachments: { type: Array },
    dateCreateTo: { type: Date, default: Date.now },
    dateUpdateTo: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Post",PostModel)