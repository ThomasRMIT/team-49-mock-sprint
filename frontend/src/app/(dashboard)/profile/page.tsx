import type { Metadata } from 'next'
import { getServerSession } from '@/actions/auth.actions'

export const metadata: Metadata = {
  title: 'Profile',
}

export default async function ProfilePage() {
  const session = await getServerSession()

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Profile</h1>
        <p className="mt-1 text-sm text-slate-400">Manage your account details.</p>
      </div>

      <div className="space-y-4 rounded-lg border border-[#8B5CF6]/20 bg-[#0C0A14] p-6 shadow-sm">
        <div>
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Email</p>
          <p className="mt-1 text-sm text-white">{session?.email ?? '—'}</p>
        </div>
      </div>
    </div>
  )
}
