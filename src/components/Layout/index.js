import Navigation from "../Navigation"
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Navigation />
        {children}
      </div>
    </div>
  )
}
