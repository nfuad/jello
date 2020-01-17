import randomColor from 'randomcolor'
import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

const adapter = new FileAsync('db.json')

export default async (title, description, owner) => {
  const backgroundColor = randomColor({
    luminosity: 'dark',
    format: 'rgb',
    alpha: 1,
  })

  const db = await low(adapter)

  await db.defaults({ boards: [] }).write()

  return await db
    .get('boards')
    .push({
      id: new Date().getTime().toString(),
      title: title,
      description: description,
      created_at: new Date().toString(),
      owner: owner,
      lanes: [],
      backgroundColor,
    })
    .last()
    .write()
}
