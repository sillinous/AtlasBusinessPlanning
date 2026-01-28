'use client'

import { 
  Layout, Search, DollarSign, Settings, Megaphone, 
  FileText, Users, Calendar, Brain, ChevronRight, Coffee 
} from 'lucide-react'

interface SidebarProps {
  activeModule: string
  onModuleChange: (module: string) => void
  expanded: boolean
  onToggleExpand: () => void
  onOpenAI: () => void
}

const modules = [
  { id: 'command', name: 'Command Center', icon: Layout, color: '#6366f1' },
  { id: 'research', name: 'Research Hub', icon: Search, color: '#8b5cf6' },
  { id: 'financial', name: 'Financial Lab', icon: DollarSign, color: '#10b981' },
  { id: 'operations', name: 'Operations Forge', icon: Settings, color: '#f59e0b' },
  { id: 'marketing', name: 'Market Engine', icon: Megaphone, color: '#ec4899' },
  { id: 'documents', name: 'Document Vault', icon: FileText, color: '#3b82f6' },
  { id: 'collaboration', name: 'War Room', icon: Users, color: '#14b8a6' },
  { id: 'timeline', name: 'Mission Timeline', icon: Calendar, color: '#f97316' },
]

export function Sidebar({ 
  activeModule, 
  onModuleChange, 
  expanded, 
  onToggleExpand,
  onOpenAI 
}: SidebarProps) {
  return (
    <nav 
      className="flex flex-col border-r border-atlas-500/20 backdrop-blur-xl transition-all duration-300"
      style={{ 
        width: expanded ? '280px' : '72px',
        background: 'rgba(15, 15, 26, 0.95)'
      }}
    >
      {/* Logo */}
      <div className="p-6 border-b border-atlas-500/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-atlas-gradient flex items-center justify-center text-xl font-bold">
          A
        </div>
        {expanded && (
          <div>
            <div className="font-bold text-lg tracking-widest">ATLAS</div>
            <div className="text-[10px] text-slate-500 tracking-wider">VENTURE BUILDER</div>
          </div>
        )}
      </div>

      {/* Project Selector */}
      <div className="p-4 border-b border-atlas-500/10">
        <div className="p-3 rounded-lg bg-atlas-500/10 border border-atlas-500/20 cursor-pointer flex items-center gap-2.5">
          <Coffee size={18} className="text-amber-500" />
          {expanded && (
            <>
              <div className="flex-1">
                <div className="text-[13px] font-semibold">Cheesecake Atelier</div>
                <div className="text-[10px] text-slate-500">Active Project</div>
              </div>
              <ChevronRight size={16} className="text-slate-500" />
            </>
          )}
        </div>
      </div>

      {/* Module Navigation */}
      <div className="flex-1 p-2 overflow-y-auto">
        {modules.map((module) => {
          const Icon = module.icon
          const isActive = activeModule === module.id
          
          return (
            <button
              key={module.id}
              onClick={() => onModuleChange(module.id)}
              className={`
                w-full p-3 mb-1 rounded-lg cursor-pointer flex items-center gap-3 
                transition-all duration-200 relative
                ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'}
              `}
              style={{
                background: isActive ? `${module.color}20` : 'transparent',
                justifyContent: expanded ? 'flex-start' : 'center'
              }}
            >
              {isActive && (
                <div 
                  className="module-indicator"
                  style={{ background: module.color }}
                />
              )}
              <Icon size={20} style={{ color: isActive ? module.color : undefined }} />
              {expanded && (
                <span className={`text-[13px] ${isActive ? 'font-semibold' : ''}`}>
                  {module.name}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* AI Assistant Toggle */}
      <div className="p-4 border-t border-atlas-500/10">
        <button
          onClick={onOpenAI}
          className="w-full p-3 rounded-lg btn-atlas-primary flex items-center gap-2.5"
          style={{ justifyContent: expanded ? 'flex-start' : 'center' }}
        >
          <Brain size={20} />
          {expanded && <span>AI Strategist</span>}
        </button>
      </div>
    </nav>
  )
}
