import * as React from 'react'
import { GraphQLClient } from 'graphql-request'

// custom imports
import DeleteBoardMutation from '../graphql/DeleteBoardMutation'

export default ({ id }) => {
  console.log(id)
  return (
    <button
      onClick={_ => {
        const client = new GraphQLClient('/api/graphql', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })

        const variables = {
          id,
        }

        client.request(DeleteBoardMutation, variables).then(res => {
          console.log(res.deleteBoard)
          document.location.href = '/'
        })
      }}
    >
      Delete Board
      <style jsx>{`
        button {
          background: var(--tertiary);
          padding: 5px 10px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
    </button>
  )
}
