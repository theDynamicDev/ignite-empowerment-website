import React from 'react'
import Link from 'next/link';
export default function Button(props, { variant = 'orangeTheme', children }) {
    let className = `mt-8 px-12 py-3 bg-gradient-to-r from-orangeTheme to-primaryDark`
        + ' hover:opacity-90 text-xl text-white/90 font-semibold drop-shadow-lg rounded-full hover:animate-bounce';
    return props.href
        ? <Link className={className} {...props} />
        : <button type="button" className={className} {...props} />
}
