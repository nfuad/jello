import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import randomColor from 'randomcolor'

// custom imports
import Form from './Form'

// initialize with sweetAlert react
const MySwal = withReactContent(Swal)

export default ({ owner }) => {
  return (
    <button
      onClick={e => {
        console.log('Add Board')
        const backgroundColor = randomColor({
          luminosity: 'dark',
          format: 'rgb',
          alpha: 1,
        })

        MySwal.fire({
          title: 'Add new Board!',
          html: (
            <Form
              onSubmit={data => {
                const boardId = new Date().getTime()
                fetch('/api/save', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    ...data,
                    owner: owner.sub,
                    boardId,
                    backgroundColor,
                  }),
                }).then(res => console.log(res))

                document.location.href = `/boards/${boardId}`
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
