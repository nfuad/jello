// import models
import Board from '../../../data/models/board'

export default async (id, owner) => {
  try {
    const board = await Board.findOne({ id, owner })
    await Board.deleteOne({ id, owner })

    return await {
      id: board.id,
    }
  } catch (err) {
    return { err }
  }
}
