import randomColor from 'randomcolor'
import mongoose from 'mongoose'

// import models
import Board from '../../../data/models/Board'

export default async (title, description, owner) => {
  try {
    const backgroundColor = randomColor({
      luminosity: 'dark',
      format: 'rgb',
      alpha: 1,
    })

    const id = new mongoose.Types.ObjectId()
    const created_at = new Date().toString()
    const board = new Board({
      id,
      title,
      description,
      created_at,
      owner,
      backgroundColor,
    })

    const res = await board.save()

    return await {
      id,
      title,
      description,
      created_at,
      owner,
      lanes: res.lanes,
      backgroundColor,
    }
  } catch (err) {
    return { err }
  }
}
