import { getServerSession } from '@/actions/auth.actions'
import { redirect } from 'next/navigation'

export default async function LandingPage() {
  const session = await getServerSession()

  if (session) {
    redirect('/team')
  }

  redirect('/auth/signin')
}
