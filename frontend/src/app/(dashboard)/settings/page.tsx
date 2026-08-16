import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
}

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Settings</h1>
        <p className="text-slate-400 text-sm mt-1">Manage your application settings.</p>
      </div>

      <div className="rounded-lg border border-[#8B5CF6]/20 bg-[#0C0A14] p-6 shadow-sm">
        <p className="text-sm text-slate-400">Settings will appear here.</p>
      </div>
    </div>
  )
}
