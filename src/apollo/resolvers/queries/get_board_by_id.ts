// import models
import Board from '../../../data/models/Board'

export default async id => {
  try {
    const res = await Board.findOne({ id })

    const {
      owner,
      title,
      description,
      created_at,
      lanes,
      backgroundColor,
    } = res
    return {
      id,
      owner,
      title,
      description,
      created_at,
      lanes,
      backgroundColor,
    }
  } catch (err) {
    return { err }
  }
}
