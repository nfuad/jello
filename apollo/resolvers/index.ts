import get_board_by_id from './queries/get_board_by_id'
import get_boards from './queries/get_boards'
import create_board from './mutations/create_board'
import update_board from './mutations/update_board'
import delete_board from './mutations/delete_board'

export const resolvers = {
  Query: {
    board(_parent, _args, _context, _info) {
      return get_board_by_id(_args.id)
    },
    boards(_parent, _args, _context, _info) {
      return get_boards(_context.user.sub)
    },
  },
  Mutation: {
    async createBoard(_parent, _args, _context, _info) {
      return await create_board(
        _args.data.title,
        _args.data.description,
        _context.user.sub
      )
    },
    async updateBoard(_parent, _args, _context, _info) {
      return await update_board(
        _args.data.id,
        _args.data.lanes,
        _context.user.sub
      )
    },
    async deleteBoard(_parent, _args, _context, _info) {
      return await delete_board(_args.data.id, _context.user.sub)
    },
  },
}
