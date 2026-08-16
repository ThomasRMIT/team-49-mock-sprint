import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ 
      background: 'linear-gradient(135deg, #050507 0%, #1a0f2e 100%)'
    }}>
      <div className="w-full max-w-sm">{children}</div>
    </div>
  )
}
