import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

const adapter = new FileAsync('db.json')

export default async function(req, res) {
  console.log('body :', req.body)
  low(adapter).then(db => {
    db.defaults({ boards: [] }).write()

    db.get('boards')
      .push({
        id: req.body.boardId,
        title: req.body.title,
        description: req.body.description,
        created_at: new Date(),
        owner: req.body.owner,
        lanes: [],
        backgroundColor: req.body.backgroundColor || 'cadetblue',
      })
      .last()
      .write()
      .catch(err => res.status(500).json({ error: 'There was an error', err }))
  })
}
