import * as React from 'react'

// custom imports
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import { useFetchUser } from '../utils/user'

export default () => {
  const { user, userLoading } = useFetchUser()

  return (
    <Layout user={user} loading={userLoading} container={true}>
      {userLoading && <Loader />}
      {!userLoading && !user && <h1>Please log in or create an account.</h1>}
      {user && (
        <>
          <h1>{user.nickname}'s Profile Info:</h1>
          <ul>
            <li>Username: {user.nickname}</li>
            <li>Email: {user.name}</li>
            <li>
              Avatar: <img src={`${user.picture}`} />
            </li>
            <li>Updated At: {new Date(user.updated_at).toString()}</li>
          </ul>

          <style jsx>{`
            h1 {
              text-transform: uppercase;
            }

            li {
              font-size: 2rem;
            }

            img {
              display: block;
              border-radius: 5px;
              margin-left: 10%;
              max-width: 20%;
            }
          `}</style>
        </>
      )}
    </Layout>
  )
}
