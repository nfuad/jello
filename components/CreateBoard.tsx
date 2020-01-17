import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { GraphQLClient } from 'graphql-request'

// custom imports
import Form from './Form'

// queries and mutations
import CREATE_BOARD from '../graphql/mutations/create-board'

// initialize with sweetAlert react
const MySwal = withReactContent(Swal)

export default () => {
  return (
    <button
      onClick={_ => {
        MySwal.fire({
          title: 'Add new Board!',
          html: (
            <Form
              onSubmit={data => {
                const client = new GraphQLClient('/api/graphql', {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
                })

                const variables = {
                  title: data.title,
                  description: data.description,
                }

                client.request(CREATE_BOARD, variables).then(res => {
                  console.log(res.createBoard)
                  document.location.href = `/boards/${res.createBoard.id}`
                })
              }}
              action="Create Board"
            />
          ),
          showConfirmButton: false,
        })
      }}
    >
      Add Board +
      <style jsx>{`
        button {
          background: var(--primary);
          padding: 5px 10px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
    </button>
  )
}
