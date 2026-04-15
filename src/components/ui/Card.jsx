import React from 'react'

/**
 * Reusable Card component — dark glass-morphism style matching the OneTap brand.
 */
export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl border border-slate-700/50 bg-navy-800/80 backdrop-blur-sm p-6 shadow-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
