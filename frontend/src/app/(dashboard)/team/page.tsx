import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Team',
}

const teamMembers = [
  {
    id: 1,
    name: 'Sherlene Andrew',
    role: 'Project Manager',
    image: '/team/sherlene.jpeg',
    description: 'I am a Computer Science student at RMIT University with two years of general IT study experience. I also work as an Education Access Worker, providing one-on-one support to students with special needs across various TAFE locations. In this role, I assist with note-taking, assessment organisation, time management, communication, and clarification, including simplification of information. These skills directly support my role as Project Manager for my capstone programming project at university, where I successfully contribute to project planning, coordinate meetings, communicate, organise the team, and help keep everyone on track as a leader.',
  },
  {
    id: 2,
    name: 'Devlyn Jay',
    role: 'Business Analyst',
    image: null,
    description: 'I am in my last year of a Bachelor of computer science(Prof) and I have had experience in planning and following processors to develop software through my time at RMIT university which include spending time learning about all the different stages of a products life cycle and methodologies used in industry to structure a team to complete a project. I am minoring in Cyber security which includes having a further understanding about security in computers and how different encryptions and how they are incorporated and used in the industry to maintain cyber security values. Out side of RMIT I am a manager at a retail store which include leading a team and giving customer service.',
  },
  {
    id: 3,
    name: 'Jonas Inocencio',
    role: 'Developer',
    image: '/team/jonas.jpeg',
    description: 'Final-year Computer Science student at RMIT with hands-on experience building cloud-native applications on AWS and applying machine learning and generative AI techniques to real-world datasets. I am majoring in Advanced Computer Science in order to get as broad of an understanding of the space and determine my best fit. My previous career as a Graphic Designer has provided me with skills in client requirement-gathering, stakeholder collaboration and design thinking.',
  },
  {
    id: 4,
    name: 'Thomas Williams',
    role: 'Developer',
    image: '/team/thomas.JPG',
    description: 'I am a Computer Science student in my last year of studies at RMIT University with 6 months work experience. I am experienced in full-stack web development, AI/ML and system architecture as well as tools such as Python, Java, Javascript, Tensorflow and C++',
  },
  {
    id: 5,
    name: 'Wangfung Chu',
    role: 'Developer',
    image: '/team/wangfung.jpg',
    description: 'I am currently completing a Bachelor of Information Technology at RMIT University, with experience across software development, backend systems, web technologies, databases, networking, and cloud computing. Throughout my studies, I have worked with a range of programming languages including Java, JavaScript, Python, C++, and C#, which has helped me develop a strong understanding of software design, implementation, testing, and system integration. I am particularly interested in backend development, server-side systems, and building reliable software solutions that connect applications, APIs, and data. I also have experience working with Linux environments, setting up servers and developing websites. Through this capstone project, I aim to further strengthen my technical and collaborative skills while gaining practical experience working with a real client and contributing to the successful delivery of a production-focused software solution.',
  },
]

export default function TeamPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Our team</p>
        <div>
          <h1 className="text-4xl font-light tracking-tight text-white" style={{ fontFamily: 'Fraunces, serif' }}>Group 49: Automated Time Tracking System.</h1>
        </div>
        <div className="h-px bg-gradient-to-r from-slate-700/50 via-slate-700/25 to-transparent" />
      </div>

      <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group flex flex-col rounded-lg border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm p-6 transition-all hover:border-indigo-500/30 hover:bg-slate-900/50"
          >
            <div className="mb-6 flex h-80 w-full items-center justify-center rounded-lg border border-slate-700/30 bg-slate-800/20 overflow-hidden">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  priority={false}
                />
              ) : (
                <div className="text-slate-600 select-none">
                  <svg className="h-20 w-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                    <line x1="6" y1="18" x2="18" y2="6" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              )}
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
