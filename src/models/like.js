import mongoose from 'mongoose';

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const LikeSchema = new Schema({
  postId: {
    type: ObjectId,
    required: true,
    ref: 'Post',
  },
  like_user: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
});

const Like = mongoose.model('Like', LikeSchema);
export default Like;
