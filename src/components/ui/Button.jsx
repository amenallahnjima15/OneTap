import React from 'react'

/**
 * Reusable Button component with brand styling variants.
 * @param {'primary' | 'secondary' | 'ghost'} variant
 */
export default function Button({
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 shadow-lg shadow-brand-500/25',
    secondary:
      'bg-navy-800 text-white hover:bg-navy-900 focus:ring-slate-500 border border-slate-700',
    ghost:
      'bg-transparent text-slate-300 hover:bg-slate-800 focus:ring-slate-500',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
