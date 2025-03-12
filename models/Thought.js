import { Schema, model } from 'mongoose';
import reactionSchema from './Reaction.js';
import moment from 'moment';

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a'),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
},
{
  toJSON: { virtuals: true, getters: true },
  id: false,
});

// Virtual: reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
export default Thought;
