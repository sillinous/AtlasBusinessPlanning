'use client'

const milestones = [
  { phase: 'Planning', status: 'active', date: 'Jan - Feb 2026' },
  { phase: 'Location & Lease', status: 'pending', date: 'Feb 2026' },
  { phase: 'Build-Out', status: 'pending', date: 'Mar - Apr 2026' },
  { phase: 'Pre-Launch', status: 'pending', date: 'May 2026' },
  { phase: 'Grand Opening', status: 'pending', date: 'Jun 2026' },
]

export function MissionTimeline() {
  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Mission Timeline</h1>
        <p className="text-slate-500 text-sm">
          Project milestones and launch countdown
        </p>
      </div>

      <div className="card-atlas border-orange-500/20">
        {milestones.map((milestone, i) => (
          <div 
            key={i}
            className={`flex items-center gap-4 py-4 ${
              i < milestones.length - 1 ? 'border-b border-atlas-500/10' : ''
            }`}
          >
            <div 
              className="w-3 h-3 rounded-full border-2 border-orange-500"
              style={{
                background: milestone.status === 'active' ? '#f97316' : 'rgba(249, 115, 22, 0.3)'
              }}
            />
            <div className="flex-1">
              <div className="text-sm font-semibold">{milestone.phase}</div>
              <div className="text-xs text-slate-500">{milestone.date}</div>
            </div>
            <span 
              className={`text-[11px] px-3 py-1 rounded-full ${
                milestone.status === 'active' 
                  ? 'bg-orange-500/20 text-orange-500' 
                  : 'bg-slate-500/20 text-slate-500'
              }`}
            >
              {milestone.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
