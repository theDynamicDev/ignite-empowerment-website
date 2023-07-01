'use client'
import {CircularProgress} from '@mui/material' // Assuming you are using Material-UI for a spinner
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="loading z-50">
      <CircularProgress />
      <div className="spinner animate-spin animate-bounce">
        <Image src="/images/logo-icon-light-shadow.png" alt="Loading" width={120} height={120} />
      </div>
      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
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
