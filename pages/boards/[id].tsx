import * as React from 'react'
import { withApollo } from '../../apollo/client'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

// custom imports
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import Board from '../../components/Board'
import { useFetchUser } from '../../utils/user'
import UpdateBoardMutation from '../../graphql/UpdateBoardMutation'
import GetBoardQuery from '../../graphql/GetBoardQuery'

export default withApollo(() => {
  const router = useRouter()
  const { user, userLoading } = useFetchUser()
  const { data, loading, error } = useQuery(GetBoardQuery, {
    variables: { id: router.query.id },
  })
  const [updateBoard] = useMutation(UpdateBoardMutation)

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
