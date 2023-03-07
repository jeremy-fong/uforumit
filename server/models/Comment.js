const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId()
        },
        commentBody: {
            type: String,
            required: true,
            maxlength: 200
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

module.exports = commentSchema;