import * as React from "react";
import Link from "next/link";

export default () => (
  <div className="container">
    <div className="jumbo">
      <span />
      <div className="jumbo-text">
        <h1>Jello lets you work more collaboratively and get more done.</h1>
        <p>
          Jello’s boards, lists, and cards enable you to organize and prioritize
          your projects in a fun, flexible, and rewarding way.
        </p>

        <Link href="/api/login">
          <a
            data-w-id="914f45eb-37fb-ae66-26d2-1122d3a9fc8a"
            className="btn hero-btn"
          >
            Get Started, It's Free!
          </a>
        </Link>
      </div>
      <img src="/img/undraw_scrum_board_cesn.svg" />
    </div>
    <footer>
      <p>
        Made with &lt;3 by{" "}
        <a href="http://nafis.co" target="_blank" rel="noopener noreferrer">
          Nafis Fuad
        </a>
        . Year {new Date().getFullYear()}, some rights reserved. Please don't
        copy me ;&#41;
      </p>
    </footer>

    <style jsx>{`
      .jumbo {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
      }

      .jumbo span {
        background: var(--tertiary);
        position: absolute;
        display: block;
        width: 45%;
        height: 200%;
        z-index: -1;
        transform: rotateZ(20deg);
        left: 10%;
      }

      .jumbo h1 {
        font-size: 3.5rem;
        line-height: 0.9;
        text-transform: uppercase;
      }

      .jumbo p {
        font-size: 1.5rem;
        line-height: 0.9;
      }

      img {
        max-width: 50%;
      }

      .btn {
        text-decoration: none;
        display: block;
        padding: 1.2rem 2rem;
        border-radius: 3px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        transition: box-shadow 0.2s;
        text-align: center;
      }

      .btn:hover {
        box-shadow: var(--box-shadow);
      }

      .hero-btn {
        background-color: var(--primary);
        color: var(--color);
        opacity: 1;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        max-width: 50%;
      }

      footer {
        text-align: center;
      }

      @media only screen and (max-width: 1000px) {
        .jumbo .jumbo-text {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }
        img {
          display: none;
        }
      }

      @media only screen and (max-width: 700px) {
        .jumbo h1 {
          font-size: 2.5rem;
        }

        .jumbo p {
          font-size: 1.2rem;
        }

        footer p {
          font-size: 0.9rem;
        }
      }
    `}</style>
  </div>
);
