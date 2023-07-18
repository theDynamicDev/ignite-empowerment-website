import {createClient, groq} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2023-05-03"

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})
