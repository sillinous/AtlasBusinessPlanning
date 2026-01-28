'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { AIAssistant } from '@/components/layout/AIAssistant'
import { CommandCenter } from '@/modules/command/CommandCenter'
import { ResearchHub } from '@/modules/research/ResearchHub'
import { FinancialLab } from '@/modules/financial/FinancialLab'
import { OperationsForge } from '@/modules/operations/OperationsForge'
import { MarketEngine } from '@/modules/marketing/MarketEngine'
import { DocumentVault } from '@/modules/documents/DocumentVault'
import { WarRoom } from '@/modules/collaboration/WarRoom'
import { MissionTimeline } from '@/modules/timeline/MissionTimeline'

export default function DashboardPage() {
  const [activeModule, setActiveModule] = useState('command')
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false)

  const renderModule = () => {
    switch (activeModule) {
      case 'command':
        return <CommandCenter />
      case 'research':
        return <ResearchHub />
      case 'financial':
        return <FinancialLab />
      case 'operations':
        return <OperationsForge />
      case 'marketing':
        return <MarketEngine />
      case 'documents':
        return <DocumentVault />
      case 'collaboration':
        return <WarRoom />
      case 'timeline':
        return <MissionTimeline />
      default:
        return <CommandCenter />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        activeModule={activeModule}
        onModuleChange={setActiveModule}
        expanded={sidebarExpanded}
        onToggleExpand={() => setSidebarExpanded(!sidebarExpanded)}
        onOpenAI={() => setAiAssistantOpen(true)}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-auto p-6">
          {renderModule()}
        </div>
      </main>

      {aiAssistantOpen && (
        <AIAssistant onClose={() => setAiAssistantOpen(false)} />
      )}
    </div>
  )
}
