import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

const adapter = new FileAsync('db.json')

export default async (id, lanes, owner) => {
  const db = await low(adapter)

  await db.defaults({ boards: [] }).write()

  return await db
    .get('boards')
    .find({ id, owner })
    .set('lanes', lanes)
    .write()
}
