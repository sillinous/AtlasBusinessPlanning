'use client'

import { useState } from 'react'
import { Brain, Sparkles, BarChart3, FileText, Target, ArrowRight, X } from 'lucide-react'

interface AIAssistantProps {
  onClose: () => void
}

export function AIAssistant({ onClose }: AIAssistantProps) {
  const [input, setInput] = useState('')

  const suggestions = [
    { priority: 'high', text: 'Complete competitor analysis for 30-mile radius' },
    { priority: 'medium', text: 'Finalize equipment vendor quotes' },
    { priority: 'low', text: 'Draft social media content calendar' },
  ]

  const quickActions = [
    { icon: Sparkles, label: 'Generate Ideas' },
    { icon: BarChart3, label: 'Analyze Data' },
    { icon: FileText, label: 'Draft Document' },
    { icon: Target, label: 'Set Goals' },
  ]

  return (
    <aside className="w-[380px] bg-dark-900/98 border-l border-atlas-500/20 flex flex-col backdrop-blur-xl">
      {/* Header */}
      <div className="p-5 border-b border-atlas-500/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-atlas-gradient flex items-center justify-center">
            <Brain size={20} />
          </div>
          <div>
            <div className="font-semibold text-sm">AI Strategist</div>
            <div className="text-[11px] text-emerald-500">● Online</div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-slate-500 hover:text-slate-300 text-xl"
        >
          <X size={20} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* AI Message */}
        <div className="p-4 rounded-xl bg-atlas-500/10 border-l-[3px] border-atlas-500 mb-4">
          <p className="text-[13px] leading-relaxed mb-3">
            I've analyzed your business plan progress. Here are my top recommendations:
          </p>
          <div className="space-y-2">
            {suggestions.map((suggestion, i) => (
              <div 
                key={i}
                className="flex items-start gap-2 p-2 rounded-md bg-black/20"
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{
                    background: suggestion.priority === 'high' 
                      ? '#ef4444' 
                      : suggestion.priority === 'medium' 
                        ? '#f59e0b' 
                        : '#10b981'
                  }}
                />
                <span className="text-xs text-slate-300">{suggestion.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, i) => (
            <button
              key={i}
              className="p-3 rounded-lg glass hover:bg-dark-700/80 flex flex-col items-center gap-1.5 transition-all"
            >
              <action.icon size={18} className="text-atlas-400" />
              <span className="text-[11px] text-slate-400">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-atlas-500/10">
        <div className="relative">
          <textarea
            placeholder="Ask anything about your venture..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input-atlas h-20 resize-none pr-12"
          />
          <button className="absolute right-2 bottom-2 w-8 h-8 rounded-md bg-atlas-gradient flex items-center justify-center text-white">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </aside>
  )
}
