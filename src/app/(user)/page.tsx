import BlogList from '../components/sanityBlog/BlogList'
import PreviewBlogList from '../components/sanityBlog/PreviewBlogList'

import {groq} from 'next-sanity'
import {draftMode} from 'next/headers'
import PreviewProvider from '../components/sanityBlog/PreviewProvider'
import {getClient} from '../../lib/sanity'
import {SpeakerWaveIcon} from '@heroicons/react/24/solid'
import {client} from '../../lib/sanity.client'

const query = groq`*[_type=='post'] {
   ...,
   author->,
   categories[]->
 } | order(_createdAt desc)
`

export default async function IndexPage() {
  const preview = draftMode().isEnabled
    ? {token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN}
    : undefined

  if (draftMode()) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewBlogList query={query} />
      </PreviewProvider>
    )
  }

  const posts = await client.fetch(query)
  console.log('query', query, 'posts', posts)
  return <BlogList posts={posts} />
}

// export default async function IndexPage() {
//   const preview = draftMode().isEnabled ? {token: process.env.SANITY_API_READ_TOKEN} : undefined

//   const data = await client.fetch(query)

//   if (preview) {
//     return (
//       <PreviewProvider token={preview.token}>
//         <PreviewDocumentsCount data={data} />
//       </PreviewProvider>
//     )
//   }

//   return <DocumentsCount data={data} />
// }
