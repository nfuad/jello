import * as React from 'react'

export default ({ children }) => (
  <span className="error">
    {children}

    <style jsx>
      {`
        span.error {
          margin-top: 1em;
          min-height: 2.2em;
          font-size: 1.2em;
          color: var(--primary);
        }
      `}
    </style>
  </span>
)
