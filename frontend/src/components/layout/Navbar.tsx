'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

export function Navbar() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }

  return (
    <header className="flex h-14 items-center justify-between border-b border-[#8B5CF6]/20 bg-[#0C0A14] px-4">
      <div className="text-sm font-semibold lg:hidden text-white">
        {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        {user && <span className="hidden text-sm text-slate-400 sm:block">{user.email}</span>}
        <Link
          href="/profile"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] transition-colors hover:bg-[#8B5CF6]/20"
          aria-label="Profile"
        >
          <User className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6]"
          aria-label="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
