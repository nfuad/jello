import get_boards from './queries/get_boards'
import get_user from './queries/get_user'
import create_board from './mutations/create_board'
import update_board from './mutations/update_board'

export const resolvers = {
  Query: {
    boards(_parent, _args, _context, _info) {
      return get_boards(_args.owner)
    },
    user(_parent, _args, _context, _info) {
      return get_user()
    },
  },
  Mutation: {
    async createBoard(_parent, _args, _context, _info) {
      return await create_board(_args.data)
    },
    async updateBoard(_parent, _args, _context, _info) {
      return await update_board(_args.data)
    },
  },
}
