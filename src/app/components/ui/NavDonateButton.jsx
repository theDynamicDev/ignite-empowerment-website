import React from 'react'
import Link from 'next/link'
export default function NavDonateButton(props) {
  let className =
    `flex relative mt-0 mx-4 sm:px-12 sm:py-3 px-3 py-3 bg-green-600 justify-center items-center max-w-[170px] px z-50` +
    ' hover:opacity-90 text-lg text-yellow-400 font-semibold drop-shadow-lg rounded-md  md:visible hover:animate-pulse'
  return props.href ? (
    <Link className={className} {...props} />
  ) : (
    <button type="button" className={className} {...props} />
  )
}
