import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

const adapter = new FileAsync('db.json')

export default async ({
  boardId,
  title,
  description,
  owner,
  backgroundColor,
}) => {
  const db = await low(adapter)

  await db.defaults({ boards: [] }).write()

  return await db
    .get('boards')
    .push({
      id: boardId || new Date().getTime().toString(),
      title: title,
      description: description,
      created_at: new Date().toString(),
      owner: owner,
      lanes: [],
      backgroundColor: backgroundColor || 'cadetblue',
    })
    .last()
    .write()
}
