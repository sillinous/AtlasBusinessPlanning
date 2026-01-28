'use client'

import { FileText, Eye, Download, Share2 } from 'lucide-react'

const documents = [
  'Business Plan.docx',
  'Financial Model.xlsx',
  'Operations Manual.md',
  'Marketing Calendar.md',
  'Equipment Specs.md',
  'Demand Forecasting.md'
]

export function DocumentVault() {
  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Document Vault</h1>
        <p className="text-slate-500 text-sm">
          All business plan documents, exports, and version history
        </p>
      </div>

      <div className="card-atlas border-blue-500/20">
        {documents.map((doc, i) => (
          <div 
            key={i}
            className={`flex items-center gap-3 p-4 ${
              i < documents.length - 1 ? 'border-b border-atlas-500/10' : ''
            }`}
          >
            <FileText size={20} className="text-blue-500" />
            <span className="flex-1 text-sm">{doc}</span>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-all">
              <Eye size={16} className="text-slate-500" />
            </button>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-all">
              <Download size={16} className="text-slate-500" />
            </button>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-all">
              <Share2 size={16} className="text-slate-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
