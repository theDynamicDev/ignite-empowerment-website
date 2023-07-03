// components/Loading.tsx

import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner animate-bounce">
        <Image src="/images/logo-icon-light-shadow.png" alt="Loading" width={120} height={120} />
      </div>
      <h1> EVENTS INCOMING...</h1>
      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
          flex-direction: column;
        }

        .spinner {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Loading
