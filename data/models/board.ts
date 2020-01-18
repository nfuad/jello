import mongoose, { Schema } from 'mongoose'

const boardSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
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
    lanes: [],
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  { collection: 'boards' }
)

let Board

if (mongoose.models.Board) {
  Board = mongoose.model('Board')
} else {
  Board = mongoose.model('Board', boardSchema)
}

export default Board
