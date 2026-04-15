import React, { useEffect, useState } from 'react'
import { Eye, MousePointerClick, Users, CreditCard } from 'lucide-react'
import { supabase } from '../lib/supabase'
import StatsCard from '../components/dashboard/StatsCard'
import Card from '../components/ui/Card'

/**
 * Dashboard — main authenticated page.
 * Displays profile stats (views, taps, contacts) fetched from Supabase.
 */
export default function Dashboard({ session }) {
  const [vcard, setVcard]   = useState(null)
  const [stats, setStats]   = useState({ total_views: 0, unique_views: 0, contacts: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data: vcardData } = await supabase
        .from('vcards')
        .select('*')
        .eq('user_id', session.user.id)
        .single()

      if (vcardData) {
        setVcard(vcardData)
        setStats({
          total_views:  vcardData.total_views  ?? 0,
          unique_views: vcardData.unique_views  ?? 0,
          contacts:     vcardData.contacts      ?? 0,
        })
      }

      setLoading(false)
    }

    fetchData()
  }, [session])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-navy-900">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy-900 p-6 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-slate-400 mt-1">
          Welcome back, {session.user.email}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard title="Total Views"   value={stats.total_views}  icon={Eye}               />
        <StatsCard title="Unique Views"  value={stats.unique_views} icon={MousePointerClick} />
        <StatsCard title="Contacts"      value={stats.contacts}     icon={Users}             />
        <StatsCard title="Active Cards"  value={1}                  icon={CreditCard}        />
      </div>

      {/* vCard preview */}
      {vcard && (
        <Card>
          <h2 className="text-lg font-semibold mb-2">Your Digital Card</h2>
          <p className="text-slate-400 text-sm">
            Share your profile link:{' '}
            <a
              href={`/t/${vcard.slug}`}
              className="text-brand-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              onetaptn.com/t/{vcard.slug}
            </a>
          </p>
        </Card>
      )}
    </div>
  )
}
