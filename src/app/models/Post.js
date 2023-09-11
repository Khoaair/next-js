import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, require: true },
    desc: { type: String, require: true },
    image: { type: String, require: true },
    content: { type: String, require: true },
    username: { type: String, require: true },
  },
  { timestamps: true }
);

// export default mongoose.model('Post', postSchema);
export default mongoose.models.Post ?? mongoose.model('Post', postSchema);
