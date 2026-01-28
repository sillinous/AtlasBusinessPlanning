'use client'

import { Megaphone } from 'lucide-react'

const categories = [
  'Brand Strategy', 'Content Calendar', 'Launch Plan',
  'Social Strategy', 'Community Programs', 'Email Campaigns'
]

export function MarketEngine() {
  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Market Engine</h1>
        <p className="text-slate-500 text-sm">
          Marketing strategy, content calendar, and campaign management
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((item, i) => (
          <div key={i} className="card-atlas-hover text-center border-pink-500/20">
            <Megaphone size={24} className="text-pink-500 mx-auto mb-3" />
            <div className="text-sm font-semibold">{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
