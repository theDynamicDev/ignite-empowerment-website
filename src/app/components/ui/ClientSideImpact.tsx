'use client'
import Link from 'next/link'

function ClientSideImpact({children, route}: {children: React.ReactNode; route: string}) {
  return <Link href={route}>{children}</Link>
}

export default ClientSideImpact
