export default owner => {
  // get the board data
  const { boards } = require('../../../db.json')

  // return an array of boards created/owned by the user
  return boards.filter(board => board.owner === owner)
}
