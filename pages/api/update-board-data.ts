import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

const adapter = new FileAsync('db.json')

export default async function(req, res) {
  console.log('body :', req.body)
  low(adapter)
    .then(db => {
      db.defaults({ boards: [] }).write()

      db.get('boards')
        .find({ id: parseInt(req.body.boardId) })
        .set('lanes', req.body.lanes)
        .write()
        .then(data => console.log(data))
    })
    .then(data => {
      console.log(data)
      return res.status(200).json({ message: 'okay.' })
    })
}
