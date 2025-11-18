// Mock for next/link - used in saas-components but not needed in Vite
// Returns a simple anchor element

import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export default function Link({
  href,
  children,
  ...props
}: LinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}
