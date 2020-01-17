import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

const adapter = new FileAsync('db.json')

export default async id => {
  const db = await low(adapter)

  await db.defaults({ boards: [] }).write()

  return await db
    .get('boards')
    .find({ id: id })
    .value()
}
