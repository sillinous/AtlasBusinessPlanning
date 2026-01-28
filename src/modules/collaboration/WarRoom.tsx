'use client'

import { Users, MessageSquare } from 'lucide-react'

export function WarRoom() {
  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">War Room</h1>
        <p className="text-slate-500 text-sm">
          Team collaboration, feedback, and stakeholder management
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card-atlas border-teal-500/20">
          <h3 className="text-sm font-semibold mb-4">Team Members</h3>
          <div className="text-center py-10 text-slate-500">
            <Users size={32} className="mx-auto mb-3 opacity-50" />
            <div className="text-sm">Invite collaborators to review and contribute</div>
          </div>
        </div>

        <div className="card-atlas border-teal-500/20">
          <h3 className="text-sm font-semibold mb-4">Recent Comments</h3>
          <div className="text-center py-10 text-slate-500">
            <MessageSquare size={32} className="mx-auto mb-3 opacity-50" />
            <div className="text-sm">No comments yet</div>
          </div>
        </div>
      </div>
    </div>
  )
}
