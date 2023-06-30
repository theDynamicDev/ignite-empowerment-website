'use client'
import React, {useMemo} from 'react'
import {LiveQueryProvider} from 'next-sanity/preview'
import {createClient} from '@sanity/preview-kit/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode
  token: string
}) {
  console.log('PreviewProvider', token)

  const client = useMemo(() => {
    const config = {
      projectId,
      dataset,
      useCdn: false,
      apiVersion,
      studioUrl: 'http://www.ignite-empowerment.org.sanity.studio',
      encodeSourceMap: 'auto',
    }

    if (token) {
      return createClient({
        ...config,
        token,
        perspective: 'previewDrafts',
        ignoreBrowserTokenWarning: true,
      })
    }
    return createClient(config)
  }, [token])

  return (
    <LiveQueryProvider logger={console} client={client}>
      {children}
    </LiveQueryProvider>
  )
}
