'use client'

import { Building, TrendingUp, Target, BarChart3, FileText } from 'lucide-react'

const metrics = [
  { label: 'Startup Investment', value: '$55,000', icon: Building },
  { label: 'Year 1 Revenue', value: '$175,000', change: '+12%', icon: TrendingUp },
  { label: 'Break-Even', value: 'Month 3', icon: Target },
  { label: 'Gross Margin', value: '65%', change: '+2%', icon: BarChart3 },
]

const documents = [
  { name: 'Financial Model (Excel)', status: 'complete' },
  { name: 'Unit Economics Analysis', status: 'complete' },
  { name: 'Break-Even Analysis', status: 'complete' },
  { name: 'Funding Strategy', status: 'draft' },
  { name: 'Cash Flow Projections', status: 'complete' },
]

export function FinancialLab() {
  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Financial Lab</h1>
        <p className="text-slate-500 text-sm">
          Financial modeling, projections, and scenario analysis
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, i) => (
          <div key={i} className="card-atlas border-emerald-500/20">
            <div className="flex items-center gap-2 mb-3">
              <metric.icon size={18} className="text-emerald-500" />
              <span className="text-xs text-slate-500">{metric.label}</span>
            </div>
            <div className="text-2xl font-bold text-emerald-500">{metric.value}</div>
            {metric.change && (
              <div className="text-xs text-emerald-500 mt-1">{metric.change} from baseline</div>
            )}
          </div>
        ))}
      </div>

      {/* Financial Documents */}
      <div className="card-atlas">
        <h3 className="text-sm font-semibold mb-4">Financial Documents</h3>
        <div className="space-y-2">
          {documents.map((doc, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-black/20">
              <FileText size={16} className="text-emerald-500" />
              <span className="flex-1 text-[13px]">{doc.name}</span>
              <span className={`badge ${doc.status === 'complete' ? 'badge-success' : 'badge-warning'}`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
