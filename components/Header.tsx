import * as React from 'react'
import Link from 'next/link'
import GithubCorner from 'react-github-corner'
import { useRouter } from 'next/router'

// custom imports
import { useUser } from '../utils/user'
import CreateBoard from './CreateBoard'
import DeleteBoard from './DeleteBoard'

export default () => {
  const { user, userLoading } = useUser()
  const router = useRouter()

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
          {!userLoading &&
            (user ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                {router.query.id && (
                  <li>
                    <DeleteBoard id={router.query.id} />
                  </li>
                )}
                <li>
                  <CreateBoard />
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
