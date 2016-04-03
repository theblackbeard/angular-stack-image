'use strict';
const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

const ArticleSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    superPowers: {type: String, required: true},
    picture: {type: Schema.Types.Mixed, required: true},
    morePictures: Schema.Types.Mixed, // this is not required
    createdAt: {type: Date, default: Date.now},    
});

module.exports = mongoose.model('Article', ArticleSchema);