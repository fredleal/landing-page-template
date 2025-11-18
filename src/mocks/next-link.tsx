// Mock for next/link - used in saas-components but not needed in Vite
// Returns a simple anchor element

import React from 'react'

export default function Link({
  href,
  children,
  ...props
}: {
  href: string
  children: React.ReactNode
  [key: string]: any
}) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}
