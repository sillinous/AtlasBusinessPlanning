'use client'

import { 
  Search, DollarSign, Settings, Megaphone, FileText,
  Clock, Zap, CheckCircle2, ChevronRight, BarChart3, Users, Download
} from 'lucide-react'

// Sample project data
const projectData = {
  completion: 34,
  modules: {
    research: { complete: 8, total: 12, color: '#8b5cf6', icon: Search },
    financial: { complete: 6, total: 8, color: '#10b981', icon: DollarSign },
    operations: { complete: 4, total: 10, color: '#f59e0b', icon: Settings },
    marketing: { complete: 3, total: 8, color: '#ec4899', icon: Megaphone },
    legal: { complete: 1, total: 6, color: '#3b82f6', icon: FileText },
  },
  recentActivity: [
    { action: 'Financial model updated', time: '2 hours ago' },
    { action: 'Recipe standards documented', time: '3 hours ago' },
    { action: 'Market analysis completed', time: '5 hours ago' },
  ],
  quickActions: [
    { icon: FileText, label: 'Generate Executive Summary', color: '#6366f1' },
    { icon: BarChart3, label: 'Update Financial Projections', color: '#10b981' },
    { icon: Users, label: 'Invite Collaborator', color: '#ec4899' },
    { icon: Download, label: 'Export Business Plan', color: '#f59e0b' },
  ]
}

export function CommandCenter() {
  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">
          Command Center
        </h1>
        <p className="text-slate-500 text-sm">
          Strategic overview of The Cheesecake Atelier venture
        </p>
      </div>

      {/* Progress Overview */}
      <div className="card-atlas bg-gradient-to-br from-atlas-500/10 to-purple-500/10 border-atlas-500/20 mb-6">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-lg font-semibold mb-1">Overall Progress</h2>
            <p className="text-slate-500 text-[13px]">Business plan completion status</p>
          </div>
          <div className="text-4xl font-bold text-atlas-500">{projectData.completion}%</div>
        </div>
        <div className="progress-bar h-3">
          <div 
            className="progress-bar-fill"
            style={{ width: `${projectData.completion}%` }}
          />
        </div>
      </div>

      {/* Module Progress Cards */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {Object.entries(projectData.modules).map(([key, value]) => {
          const Icon = value.icon
          const percentage = Math.round((value.complete / value.total) * 100)
          
          return (
            <div key={key} className="card-atlas-hover">
              <div className="flex items-center gap-2.5 mb-3">
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${value.color}20` }}
                >
                  <Icon size={18} style={{ color: value.color }} />
                </div>
                <span className="text-[13px] font-semibold capitalize">{key}</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-slate-500 text-xs">
                  {value.complete}/{value.total} tasks
                </span>
                <span className="font-semibold" style={{ color: value.color }}>
                  {percentage}%
                </span>
              </div>
              <div className="progress-bar h-1.5">
                <div 
                  className="h-full rounded-full transition-all"
                  style={{ width: `${percentage}%`, background: value.color }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="card-atlas">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Clock size={16} className="text-atlas-500" />
            Recent Activity
          </h3>
          {projectData.recentActivity.map((activity, i) => (
            <div 
              key={i}
              className={`flex items-center gap-3 py-3 ${
                i < projectData.recentActivity.length - 1 
                  ? 'border-b border-atlas-500/10' 
                  : ''
              }`}
            >
              <CheckCircle2 size={16} className="text-emerald-500" />
              <div className="flex-1">
                <div className="text-[13px]">{activity.action}</div>
                <div className="text-[11px] text-slate-500">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="card-atlas">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Zap size={16} className="text-amber-500" />
            Quick Actions
          </h3>
          <div className="space-y-2">
            {projectData.quickActions.map((action, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-atlas-500/10 hover:border-atlas-500/30 transition-all text-left"
              >
                <action.icon size={16} style={{ color: action.color }} />
                <span className="text-[13px] flex-1">{action.label}</span>
                <ChevronRight size={14} className="text-slate-500" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
