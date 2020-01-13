import * as React from "react";

export default () => (
  <div className="loader-wrapper">
    <p>Loading login info...</p>
    <div className="loader" />

    <style jsx>{`
      .loader-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        flex-direction: column;
      }
      .loader {
        width: 5vw;
        height: 5vw;
        background: var(--tertiary);
        border-radius: 5px;
        animation: rotate 0.2s infinite;
      }

      @keyframes rotate {
        from {
          background: var(--primary);
          transform: rotateZ(0deg);
        }
        to {
          background: var(--tertiary);
          transform: rotateZ(90deg);
        }
      }
    `}</style>
  </div>
);
