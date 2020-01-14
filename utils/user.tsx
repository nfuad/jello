import * as React from 'react'
import fetch from 'isomorphic-unfetch'
// import jwt from 'jsonwebtoken'
// import { GraphQLClient } from 'graphql-request'

// Use a global to save the user, so we don't have to fetch it again after page navigations
let userState

const User = React.createContext({ user: null, loading: false })

// const saveToDatabase = async user => {
//   const token = jwt.sign(user, '_1q2Q3w4$W5e6E7r8R9t10T11y12Y@#%')
//   localStorage.setItem('token', token)
//   const endpoint = '/api/graphql'

//   const graphQLClient = new GraphQLClient(endpoint, {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   })

//   const query = /* GraphQL */ `
//     mutation {
//       createUser($data: { id: '12341234' name: 'stringy name' status: 'statusy' }) {
//         name
//     }
//     }
//   `

//   const variables = {
//     data: { id: '12341234', name: 'stringy name', status: 'statusy' },
//   }
//   const data = await graphQLClient.request(query)
//   console.log('DATA GOES HERE:', data)
// }

const getUserBoards = async userId => {
  const res = await fetch('/api/board-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ owner: userId }),
  })

  const { data } = await res.json()
  console.log(data)
  return data
}

export const fetchUser = async () => {
  if (userState !== undefined) return userState

  const res = await fetch('/api/me')
  userState = res.ok ? await res.json() : null
  if (userState) {
    // saveToDatabase(userState)
    // getUserBoards(userState.sub)
    console.log(userState.sub)
    userState.boards = await getUserBoards(userState.sub)
    console.log(userState)
  }
  return userState
}

export const UserProvider = ({ value, children }) => {
  const { user } = value

  // If the user was fetched in SSR add it to userState so we don't fetch it again
  React.useEffect(() => {
    if (!userState && user) {
      userState = user
    }
  }, [])

  return <User.Provider value={value}>{children}</User.Provider>
}

export const useUser = () => React.useContext(User)

export const useFetchUser = () => {
  const [data, setUser] = React.useState({
    user: userState || null,
    loading: userState === undefined,
  })

  React.useEffect(() => {
    if (userState !== undefined) return

    let isMounted = true

    fetchUser().then(user => {
      // Only set the user if the component is still mounted
      if (isMounted) setUser({ user, loading: false })
    })

    return () => {
      isMounted = false
    }
  }, [userState])

  return data
}
