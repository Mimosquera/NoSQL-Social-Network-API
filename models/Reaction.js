import { Schema, Types } from 'mongoose';
import moment from 'moment';

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a'),
  },
},
{
  toJSON: { getters: true },
  id: false,
});

export default reactionSchema;
