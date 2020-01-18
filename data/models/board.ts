import mongoose, { Schema } from 'mongoose'

const boardSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
      default: Date.now,
    },
    owner: {
      type: String,
      required: true,
    },
    lanes: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: 'Lane',
      default: [],
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  { collection: 'boards' }
)

const Board = mongoose.model('Board', boardSchema)

export default Board
