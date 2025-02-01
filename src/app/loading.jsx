import React from "react";

function loading() {
  return (
    <>
      <style>{`
        .spinner {
          --size: 30px;
          --first-block-clr:#2B425788;
          --second-block-clr: #2B4257;
          --clr: #111;
          width: 100px;
          height: 100px;
          position: relative;
        }

        .spinner::after, .spinner::before {
          box-sizing: border-box;
          position: absolute;
          content: "";
          width: var(--size);
          height: var(--size);
          top: 50%;
          animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
          left: 50%;
          background: var(--first-block-clr);
        }

        .spinner::after {
          background: var(--second-block-clr);
          top: calc(50% - var(--size));
          left: calc(50% - var(--size));
          animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
        }

        @keyframes down {
          0%, 100% {
            transform: none;
          }
          25% {
            transform: translateX(100%);
          }
          50% {
            transform: translateX(100%) translateY(100%);
          }
          75% {
            transform: translateY(100%);
          }
        }

        @keyframes up {
          0%, 100% {
            transform: none;
          }
          25% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(-100%) translateY(-100%);
          }
          75% {
            transform: translateY(-100%);
          }
        }
      `}</style>
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    </>
  );
}

export default loading;
