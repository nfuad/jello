import * as React from 'react'
import { useRouter } from 'next/router'

// custom imports
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import Board from '../../components/Board'
import { useFetchUser } from '../../utils/user'

export default () => {
  const router = useRouter()
  const { user, loading } = useFetchUser()

  let data: any = {}

  if (user && !loading) {
    const board = user.boards.filter(
      board => board.id.toString() === router.query.id
    )
    data = { ...board[0] }
  }

  const onDataChange = async (event, boardId) => {
    console.log('data changed: ', event)

    // update the board data in the database.
    fetch('/api/update-board-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ boardId, lanes: event.lanes }),
    })
  }

  return (
    <Layout user={user} loading={loading} container={!user}>
      {loading && <Loader />}
      {!loading && !user && <h1>Please log in or create an account.</h1>}
      {user && (
        <Board
          draggable
          editable
          canAddLanes
          data={data}
          onDataChange={event => onDataChange(event, router.query.id)}
          style={{ backgroundColor: data.backgroundColor }}
        />
      )}
    </Layout>
  )
}
