import * as React from 'react'
import { withApollo } from '../apollo/client'
import { useQuery } from '@apollo/react-hooks'

// custom imports
import Landing from '../components/Landing'
import Loader from '../components/Loader'
import BoardItem from '../components/BoardItem'
import Layout from '../components/Layout'
import { useFetchUser } from '../utils/user'

// queries and mutations
import GET_ALL_BOARDS from '../graphql/queries/get-all-boards'

export default withApollo(() => {
  const { user, userLoading } = useFetchUser()
  const { data, loading, error } = useQuery(GET_ALL_BOARDS)

  return (
    <Layout user={user} loading={userLoading || loading} container={true}>
      {userLoading && loading && <Loader />}
      {!userLoading && !user && <Landing />}
      {error && <h1>There was an error, please try again later.</h1>}
      {console.log(error)}
      {user && data && (
        <>
          <h1>Boards</h1>
          <ul>
            {data.boards.map(board => {
              const { id, title, backgroundColor, description } = board

              return (
                <BoardItem
                  key={id}
                  name={title}
                  id={id}
                  backgroundColor={backgroundColor}
                  description={description}
                />
              )
            })}
          </ul>
          <style jsx>
            {`
              ul {
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
              }
            `}
          </style>
        </>
      )}
    </Layout>
  )
})
