import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

/**
 * Profile — public-facing NFC profile page.
 * Accessed via /t/:slug when someone taps an OneTap NFC card.
 * Fetches vcard data from Supabase and increments the view counter.
 */
export default function Profile() {
  const [vcard, setVcard]     = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  const slug = window.location.pathname.split('/').pop()

  useEffect(() => {
    async function fetchProfile() {
      const { data, error } = await supabase
        .from('vcards')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error || !data) {
        setNotFound(true)
      } else {
        setVcard(data)

        // Increment view counter
        await supabase
          .from('vcards')
          .update({ total_views: (data.total_views ?? 0) + 1 })
          .eq('slug', slug)
      }

      setLoading(false)
    }

    if (slug) fetchProfile()
  }, [slug])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-navy-900">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="flex h-screen items-center justify-center bg-navy-900 text-white">
        <div className="text-center">
          <p className="text-5xl mb-4">🤷</p>
          <h1 className="text-xl font-semibold">Profile not found</h1>
          <p className="text-slate-400 text-sm mt-2">This card doesn't exist or has been deactivated.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-3xl border border-slate-700/50 bg-navy-800 p-8 shadow-2xl text-center">
        {/* Avatar */}
        {vcard.avatar_url && (
          <img
            src={vcard.avatar_url}
            alt={vcard.full_name}
            className="mx-auto mb-4 h-24 w-24 rounded-full object-cover ring-4 ring-brand-600/30"
          />
        )}

        {/* Name & title */}
        <h1 className="text-2xl font-bold">{vcard.full_name}</h1>
        {vcard.job_title && (
          <p className="text-brand-600 text-sm font-medium mt-1">{vcard.job_title}</p>
        )}
        {vcard.company && (
          <p className="text-slate-400 text-sm mt-0.5">{vcard.company}</p>
        )}

        {/* Bio */}
        {vcard.bio && (
          <p className="text-slate-300 text-sm mt-4 leading-relaxed">{vcard.bio}</p>
        )}

        {/* CTA — Save Contact */}
        <button className="mt-6 w-full rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
          Save Contact
        </button>
      </div>
    </div>
  )
}
