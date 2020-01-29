import mongoose from 'mongoose'

// import models
import Board from '../../../data/models/Board'

export default async (id, lanes, owner) => {
  try {
    id = mongoose.Types.ObjectId(id)

    await Board.update({ id, owner }, { lanes })
    const board = await Board.findOne({ id, owner })

    const { created_at, title, description, backgroundColor } = board

    return await {
      id,
      owner,
      lanes,
      created_at,
      title,
      description,
      backgroundColor,
    }
  } catch (err) {
    console.log(err)
    return { err }
  }
}
