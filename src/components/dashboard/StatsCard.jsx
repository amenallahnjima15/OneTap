import React from 'react'
import Card from '../ui/Card'

/**
 * StatsCard — displays a single metric (views, taps, contacts, etc.)
 * Used in the main Dashboard to summarize profile analytics.
 *
 * @param {string}  title   - Metric label (e.g. "Total Views")
 * @param {number}  value   - Numeric value to display
 * @param {node}    icon    - Lucide icon component
 * @param {string}  trend   - Optional trend label (e.g. "+12% this week")
 * @param {boolean} positive - Whether the trend is positive (green) or negative (red)
 */
export default function StatsCard({ title, value, icon: Icon, trend, positive = true }) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-400">{title}</span>
        {Icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
            <Icon size={18} />
          </div>
        )}
      </div>

      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-white">
          {typeof value === 'number' ? value.toLocaleString() : value ?? '—'}
        </span>

        {trend && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-lg ${
              positive
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-red-500/10 text-red-400'
            }`}
          >
            {trend}
          </span>
        )}
      </div>
    </Card>
  )
}
