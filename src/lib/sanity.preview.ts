import {projectId, dataset, apiVersion} from './sanity.client'
import {createClient} from '@sanity/client'
import type {SanityClient} from '@sanity/client'

export function getClient({preview}: {preview?: {token: string}}): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}
