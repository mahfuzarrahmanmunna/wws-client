import React from 'react'

const FloatingMessenger = ({ page: pageProp, refParam: refProp, className: classNameProp }) => {
  const page = pageProp || import.meta.env.VITE_MESSENGER_PAGE || ''
  const refMessage = refProp || import.meta.env.VITE_MESSENGER_REF || ''

  if (!page) return null

  const encodedRef = refMessage ? `?ref=${encodeURIComponent(refMessage)}` : ''
  const href = `https://m.me/${page}${encodedRef}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on Messenger"
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full hover:bg-blue-600 text-white bg-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105 ${classNameProp || ''}`}
    >
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M505.999 248.5c0 139.34-109.168 242.497-250 242.497-25.292 0-49.56-3.334-72.37-9.605a19.941 19.941 0 00-13.35.972l-49.624 21.907c-12.977 5.735-27.628-3.499-28.063-17.682l-1.364-44.477c-.17-5.475-2.634-10.603-6.72-14.247C35.865 384.361 6 321.388 6 248.5 6 109.165 115.168 6.002 256 6.002c140.831 0 249.999 103.163 249.999 242.498z" fill="#0866ff" fill-rule="nonzero"/><path d="M323.88 318.306l87.04-134.517c8.752-13.52-7.458-29.257-20.714-20.113l-90.86 62.67a9.19 9.19 0 01-10.218.152l-80.643-52.175c-6.826-4.414-15.94-2.463-20.353 4.363L101.085 313.21c-8.752 13.52 7.459 29.257 20.713 20.112l90.88-62.675a9.199 9.199 0 0110.224-.152l80.63 52.174c6.827 4.415 15.94 2.464 20.354-4.363h-.006z" fill="#fff" fill-rule="nonzero"/></svg>
    </a>
  )
}

export default FloatingMessenger