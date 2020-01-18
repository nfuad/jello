import mongoose, { Schema } from 'mongoose'

const cardSchema = new Schema(
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
    label: {
      type: String,
      required: false,
      default: null,
    },
  },
  { collection: 'cards' }
)

const Card = mongoose.model('Card', cardSchema)

export default Card
