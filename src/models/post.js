import mongoose from 'mongoose';

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  capacity: String,
  publishedDate: {
    type: Date,
    default: Date.now(),
  },
  // user와 관련된 user도 들어가게끔 해야 한다.
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
  creator: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  // 모집인원을 나타내는 필드
  maxPeople: String,
  likeId: {
    type: ObjectId,
    ref: 'Like',
  },
});

PostSchema.methods.serialize = function () {
  const data = this.toJSON();
  // 응답할 데이터에서 hashedPassword를 삭제해야 한다.
  // 알면 안되기 때문이다.
  delete data.creator.hashedPassword;
  return data;
};

PostSchema.methods.addLikeField = function ({ _id }) {
  this.likeId = _id;
};

// 이 떄 db이름은 posts가 된다.
// db이름을 지정하고 싶으면 3번째 파라미터에 집어 넣으면 되고,
// 컨벤션은 구분자를 사용하지 않고 복수 형태로 사용하는 것이다.
const Post = mongoose.model('Post', PostSchema);
export default Post;
