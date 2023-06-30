import BlogList from '../components/sanityBlog/BlogList'
import PreviewBlogList from '../components/sanityBlog/PreviewBlogList'

import type {LoaderArgs} from '@vercel/remix'
import {useLoaderData} from '@remix-run/react'
import {getClient} from '../../lib/sanity'
import {groq} from 'next-sanity'
import {draftMode} from 'next/headers'
import PreviewProvider from '../components/sanityBlog/PreviewProvider'
// import {Post} from '../../../typings'
// import {client} from '../../lib/sanity.client'
import {typeOf} from 'react-is'

// export async function loader({request}: LoaderArgs) {
//   const client = getClient({})
//   const url = new URL(request.url)
//   const lastId = url.searchParams.get('lastId') || ''

//   const users = await client.fetch<UsersResponse>(usersQuery, {lastId})

//   return {users, lastId}
// }
const client = getClient({})
const query = groq`*[_type=='post'] {
   ...,
   author->,
   categories[]->
 } | order(_createdAt desc)
 
`
// fetch('localhost:3000/api/draft', {
//   method: 'GET',
//   credentials: 'same-origin', // Include cookies
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }
//     return response.text()
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error('Error:', error))

export default async function Page() {
  console.log('draftMode', draftMode().isEnabled)
  const preview = draftMode().isEnabled
    ? {token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN}
    : undefined

  console.log('preview', preview)
  console.log(process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN)
  console.log('Draftmodefunction', draftMode())
  console.log('query', query)

  if (preview) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewBlogList data={query} />
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
