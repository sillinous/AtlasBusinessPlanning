'use client'

import { Brain, Search } from 'lucide-react'

const researchCategories = [
  { name: 'Market Analysis', items: 4, complete: 3 },
  { name: 'Competitor Research', items: 6, complete: 2 },
  { name: 'Customer Personas', items: 4, complete: 4 },
  { name: 'Industry Trends', items: 5, complete: 1 },
  { name: 'Location Analysis', items: 3, complete: 2 },
]

const quickPrompts = [
  'Analyze local bakery competition',
  'Research cheesecake market trends',
  'Find Newton demographics',
  'Identify wholesale opportunities'
]

export function ResearchHub() {
  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Research Hub</h1>
        <p className="text-slate-500 text-sm">
          Market intelligence, competitor analysis, and strategic insights
        </p>
      </div>

      {/* AI Research Assistant */}
      <div className="card-atlas bg-gradient-to-br from-purple-500/20 to-atlas-500/10 border-purple-500/30 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Brain size={24} className="text-purple-500" />
          <h2 className="text-base font-semibold">AI Research Assistant</h2>
        </div>
        <p className="text-[13px] text-slate-300 mb-4">
          I can help you research competitors, analyze market trends, identify customer segments, 
          and gather intelligence on your target market.
        </p>
        <div className="flex gap-3 flex-wrap">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs hover:bg-purple-500/30 transition-all"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Research Categories */}
      <div className="grid grid-cols-3 gap-4">
        {researchCategories.map((cat, i) => {
          const percentage = Math.round((cat.complete / cat.items) * 100)
          return (
            <div key={i} className="card-atlas-hover">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">{cat.name}</h3>
                <span className="text-xs text-emerald-500">{cat.complete}/{cat.items}</span>
              </div>
              <div className="progress-bar h-1.5">
                <div 
                  className="h-full rounded-full bg-purple-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
