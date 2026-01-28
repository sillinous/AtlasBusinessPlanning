'use client'

import { Settings } from 'lucide-react'

const categories = [
  'Recipe Standards', 'Equipment List', 'Space Design', 
  'Vendor Management', 'Quality Control', 'SOPs'
]

export function OperationsForge() {
  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Operations Forge</h1>
        <p className="text-slate-500 text-sm">
          Recipe standards, equipment planning, and operational procedures
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((item, i) => (
          <div key={i} className="card-atlas-hover text-center border-amber-500/20">
            <Settings size={24} className="text-amber-500 mx-auto mb-3" />
            <div className="text-sm font-semibold">{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
