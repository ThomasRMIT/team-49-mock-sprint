import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
}

const teamMembers = [
  {
    id: 1,
    name: 'Sherlene Andrew',
    role: 'Project Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
  },
  {
    id: 2,
    name: 'Devlyn Jay',
    role: 'Business Analyst',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
  },
  {
    id: 3,
    name: 'Jonas Inocencio',
    role: 'User Experience Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
  },
  {
    id: 4,
    name: 'Thomas Williams',
    role: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
  },
  {
    id: 5,
    name: 'Wangfung Chu',
    role: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
  },
]

export default function TeamPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Our team</p>
        <div>
          <h1 className="text-4xl font-light tracking-tight text-white" style={{ fontFamily: 'Fraunces, serif' }}>Group 49: Automated Time Tracking System.</h1>
          <p className="mt-4 text-base text-slate-400">Team blurb here</p>
        </div>
        <div className="h-px bg-gradient-to-r from-slate-700/50 via-slate-700/25 to-transparent" />
      </div>

      <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group flex flex-col rounded-lg border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm p-6 transition-all hover:border-indigo-500/30 hover:bg-slate-900/50"
          >
            <div className="mb-6 flex h-40 w-full items-center justify-center rounded-lg border border-slate-700/30 bg-slate-800/20 overflow-hidden">
              <div className="text-slate-600 select-none">
                <svg className="h-20 w-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">
              {member.role}
            </p>
            <h3 className="text-lg font-light text-white mb-2">{member.name}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
