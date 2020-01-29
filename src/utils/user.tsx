import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import jwt from 'jsonwebtoken'

// Use a global to save the user, so we don't have to fetch it again after page navigations
let userState

const User = React.createContext({ user: null, userLoading: false })

const setToken = async user => {
  const token = jwt.sign(user, '_1q2Q3w4$W5e6E7r8R9t10T11y12Y@#%')
  localStorage.setItem('token', token)
}

export const fetchUser = async () => {
  if (userState !== undefined) return userState

  const res = await fetch('/api/me')
  userState = res.ok ? await res.json() : null
  if (userState) {
    setToken(userState)
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
    userLoading: userState === undefined,
  })

  React.useEffect(() => {
    if (userState !== undefined) return

    let isMounted = true

    fetchUser().then(user => {
      // Only set the user if the component is still mounted
      if (isMounted) setUser({ user, userLoading: false })
    })

    return () => {
      isMounted = false
    }
  }, [userState])

  return data
}
