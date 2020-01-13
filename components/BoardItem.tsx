import * as React from "react";
import Link from "next/link";
import randomColor from "randomcolor";

export default ({ name, id }) => {
  const color = randomColor({
    luminosity: "dark",
    format: "rgb",
    alpha: 1
  });
  return (
    <li>
      <Link href={`/boards/${id}`}>
        <a style={{ background: color }}>{name}</a>
      </Link>
      <style jsx>{`
        li {
          list-style-type: none;
          padding: 0;
          margin: 0 2% 8px 0;
          max-width: 12vw;
        }

        a {
          line-height: 20px;
          padding: 10px;
          border: none;
          height: 8vw;
          width: 12vw;
          border-radius: 5px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: box-shadow 0.2s, opacity 0.25s;
          opacity: 1;
        }

        a:hover {
          box-shadow: var(--box-shadow);
          opacity: 0.8;
        }
      `}</style>
    </li>
  );
};
