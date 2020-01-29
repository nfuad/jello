import * as React from 'react'
import Link from 'next/link'

export default ({ name, description, id, backgroundColor }) => {
  return (
    <li>
      <Link href={`/boards/${id}`}>
        <a style={{ backgroundColor }}>
          <span className="board-name">{name}</span>
          <hr />
          <span className="board-description">{description}</span>
        </a>
      </Link>
      <style jsx>{`
        li {
          list-style-type: none;
          padding: 0;
          margin: 0 2% 8px 0;
          max-width: 15vw;
        }

        a {
          line-height: 20px;
          padding: 10px;
          border: none;
          height: 10vw;
          width: 15vw;
          border-radius: 5px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: box-shadow 0.2s, opacity 0.25s;
          opacity: 1;
        }

        a:hover {
          box-shadow: var(--box-shadow);
          opacity: 0.8;
        }

        hr {
          width: 50%;
        }

        span.board-name {
          font-size: 1.2rem;
        }

        span.board-description {
          font-size: 0.9rem;
        }
      `}</style>
    </li>
  )
}
