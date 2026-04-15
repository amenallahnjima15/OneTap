import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Profile from './pages/Profile'

export default function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) return null

  // Basic client-side routing
  const path = window.location.pathname

  if (path.startsWith('/t/') || path.startsWith('/c/')) {
    return <Profile />
  }

  if (!session) {
    return <Login />
  }

  return <Dashboard session={session} />
}
