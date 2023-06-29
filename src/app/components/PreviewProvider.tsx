'use client'

import {useMemo} from 'react'
import {LiveQueryProvider} from 'next-sanity/preview'
import {client} from '../../lib/sanity.client'

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode
  token: string
}) {
  const client = useMemo(() => client({token}), [token])
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
