const mongoose = require('mongoose');

const Language = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        level: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);

const LanguageModel = mongoose.model('Language', Language);
module.exports = LanguageModel;
