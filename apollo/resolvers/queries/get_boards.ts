// import models
import Board from '../../../data/models/board'

export default async owner => {
  try {
    const res = await Board.find({ owner })

    return [...res]
  } catch (err) {
    return { err }
  }
}
