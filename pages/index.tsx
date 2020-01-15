import * as React from 'react'

// custom imports
import Layout from '../components/Layout'
import Landing from '../components/Landing'
import Loader from '../components/Loader'
import BoardItem from '../components/BoardItem'
import { useFetchUser } from '../utils/user'

export default () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading} container={true}>
      {loading && <Loader />}
      {!loading && !user && <Landing />}
      {user && (
        <>
          <h1>Boards</h1>
          <ul>
            {user.boards.map(board => {
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
}
