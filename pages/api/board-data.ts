export default function(req, res) {
  const db = require('../../db.json')
  const { boards } = db
  const data = boards.filter(board => board.owner === req.body.owner)
  console.log(data)
  return res.json({ data })
}
