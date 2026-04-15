import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import Button from '../components/ui/Button'

/**
 * Login — authentication page using Supabase Magic Link.
 * Users enter their email and receive a one-time login link.
 */
export default function Login() {
  const [email, setEmail]     = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState(null)

  async function handleLogin() {
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }

    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-900 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-700/50 bg-navy-800 p-8 shadow-2xl">
        {/* Logo */}
        <div className="mb-8 text-center">
          <span className="text-2xl font-bold text-white">
            One<span className="text-brand-600">Tap</span>
          </span>
          <p className="mt-2 text-sm text-slate-400">Sign in to your dashboard</p>
        </div>

        {sent ? (
          <div className="rounded-xl bg-brand-600/10 border border-brand-600/30 p-4 text-center text-sm text-brand-400">
            ✅ Check your inbox — we've sent you a magic link!
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>

            {error && (
              <p className="text-xs text-red-400">{error}</p>
            )}

            <Button
              variant="primary"
              className="w-full"
              disabled={loading || !email}
              onClick={handleLogin}
            >
              {loading ? 'Sending…' : 'Send Magic Link'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
