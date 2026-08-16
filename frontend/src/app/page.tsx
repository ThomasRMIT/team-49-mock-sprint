import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the app',
}

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8" style={{ background: 'linear-gradient(135deg, #050507 0%, #1a0f2e 100%)' }}>
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white" style={{ fontFamily: 'Fraunces, serif' }}>
          {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
        </h1>
        <p className="max-w-md text-lg text-slate-400">
          Your app description goes here. Edit{' '}
          <code className="rounded bg-[#0C0A14] px-1 py-0.5 font-mono text-sm border border-[#8B5CF6]/20">
            src/app/page.tsx
          </code>{' '}
          to get started.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/auth/signin"
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:from-indigo-500 hover:to-indigo-400"
        >
          Sign in
        </Link>
        <Link
          href="/auth/signup"
          className="inline-flex items-center justify-center rounded-md border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-6 py-2.5 text-sm font-medium text-[#8B5CF6] shadow-sm transition-colors hover:bg-[#8B5CF6]/20"
        >
          Create account
        </Link>
      </div>
    </main>
  )
}
