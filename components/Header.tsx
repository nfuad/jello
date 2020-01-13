import * as React from 'react'
import Link from 'next/link'
import GithubCorner from 'react-github-corner'

// custom imports
import { useUser } from '../utils/user'
import CreateBoard from './CreateBoard'

export default () => {
  const { user, loading } = useUser()

  return (
    <header>
      <GithubCorner
        href="https://github.com/nfuad/jello"
        bannerColor="var(--primary)"
        size="60"
      />
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>{' '}
                <li>
                  <CreateBoard owner={user} />
                </li>
                <li>
                  <a href="/api/logout" onClick={() => localStorage.clear()}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/api/login">Login</a>
                </li>
              </>
            ))}
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 0.2rem;
        }
        nav {
          max-width: 70vw;
          margin: auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:nth-child(2) {
          margin-right: auto;
        }

        button {
          font-size: 1rem;
          color: var(--white);
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
    </header>
  )
}
