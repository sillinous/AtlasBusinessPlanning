'use client'

import { useState } from 'react'
import { Search, Share2, Download } from 'lucide-react'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="h-16 border-b border-atlas-500/10 flex items-center px-6 gap-6 bg-dark-900/80 backdrop-blur-xl">
      {/* Search */}
      <div className="flex-1 max-w-lg relative">
        <Search 
          size={18} 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" 
        />
        <input
          type="text"
          placeholder="Search documents, tasks, insights..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-atlas pl-11"
        />
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        <button className="btn-atlas-secondary flex items-center gap-2">
          <Share2 size={14} />
          Share
        </button>
        <button className="btn-atlas-success flex items-center gap-2">
          <Download size={14} />
          Export
        </button>
      </div>
    </header>
  )
}
