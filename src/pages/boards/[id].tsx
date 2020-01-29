import * as React from 'react'
import { withApollo } from '../../apollo/client'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

// custom imports
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import Board from '../../components/Board'
import { useFetchUser } from '../../utils/user'

// queries and mutations
import UPDATE_BOARD from '../../graphql/mutations/update-board'
import GET_BOARD from '../../graphql/queries/get-board'

export default withApollo(() => {
  const router = useRouter()
  const { user, userLoading } = useFetchUser()
  const { data, loading, error } = useQuery(GET_BOARD, {
    variables: { id: router.query.id },
  })
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const handleDataChange = data => {
    console.log(data)
    const lanes: any = []

    data.lanes.forEach(lane => {
      const obj = { ...lane }
      delete obj.__typename
      obj.cards.forEach(card => {
        delete card.__typename
      })
      lanes.push(obj)
    })

    updateBoard({
      variables: { id: router.query.id, lanes },
    })
  }

  return (
    <Layout user={user} loading={userLoading} container={!user}>
      {error && <h1>There was an error</h1>}
      {!userLoading && !user && <h1>Please log in or create an account.</h1>}
      {loading && userLoading && <Loader />}
      {user && data && (
        <Board
          draggable
          editable
          canAddLanes
          data={data.board}
          onDataChange={handleDataChange}
          style={{ backgroundColor: data.board.backgroundColor }}
        />
      )}
    </Layout>
  )
})
