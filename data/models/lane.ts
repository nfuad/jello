import mongoose, { Schema } from 'mongoose'

const laneSchema = new Schema(
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
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
    cards: {
      type: [Schema.Types.ObjectId],
      required: true,
      default: [],
      ref: 'Card',
    },
  },
  { collection: 'lanes' }
)

const Lane = mongoose.model('Lane', laneSchema)

export default Lane
