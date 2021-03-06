const mongoose = require('mongoose');
const Schema = mongoose.Schema;

challengeSchema = new Schema({
    title: String,
    description: String,
    startDate: Date,
    deadline: Date,
    ideas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Idea'
        }
    ],
    managerPanel: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    challengeNumber: Number
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })

const Challenge = mongoose.model('Challenge', challengeSchema);
module.exports = Challenge;