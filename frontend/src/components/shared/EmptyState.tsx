import type { LucideIcon } from 'lucide-react'
import { Inbox } from 'lucide-react'

interface EmptyStateProps {
  title: string
  description?: string
  icon?: LucideIcon
  action?: React.ReactNode
}

export function EmptyState({
  title,
  description,
  icon: Icon = Inbox,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6]/10">
        <Icon className="h-6 w-6 text-[#8B5CF6]" />
      </div>
      <div>
        <p className="font-medium text-sm text-white">{title}</p>
        {description && <p className="text-slate-400 text-sm mt-1">{description}</p>}
      </div>
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
