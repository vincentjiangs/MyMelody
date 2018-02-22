const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, required: true},
    trackId: {type: mongoose.Types.ObjectId, required: true},
    caption: {typ: String, default: ''}   
}, {versionKey: false});


module.exports = mongoose.model('Post', postSchema);