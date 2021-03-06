import jwt from 'jsonwebtoken'
import { ApolloServer } from 'apollo-server-micro'

import conf from '../../config'

// import schema
import { schema } from '../../apollo/schema'

require('../../data/db')

const getUser = token => {
  try {
    const decoded = jwt.verify(token, conf.JWT_SECRET)
    return { ...decoded }
  } catch (error) {
    console.log(error)
    return {}
  }
}

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    // To find out the correct arguments for a specific integration,
    // see the `context` option in the API reference for `apollo-server`:
    // https://www.apollographql.com/docs/apollo-server/api/apollo-server/

    // Get the user token from the headers.
    const token = req.headers.authorization
      ? req.headers.authorization.split(' ')[1]
      : ''

    // try to retrieve a user with the token
    const user = getUser(token)

    // add the user to the context

    return { user }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
