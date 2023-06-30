'use client'

import React from 'react'
import {getClient} from '../../../lib/sanity'
import {LiveQueryProvider} from '@sanity/preview-kit'
import {useMemo} from 'react'

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode
  token: string
}) {
  const client = useMemo(() => getClient({preview: {token}}), [token])
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
