import BlogList from '../components/sanityBlog/BlogList'
import PreviewBlogList from '../components/sanityBlog/PreviewBlogList'

import type {LoaderArgs} from '@vercel/remix'
import {useLoaderData} from '@remix-run/react'
import getClient from '../../lib/sanity'
import {groq} from 'next-sanity'
import {draftMode} from 'next/headers'
import PreviewProvider from '../components/sanityBlog/PreviewProvider'

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

  // console.log('preview', preview)
  // console.log(process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN)
  // console.log('Draftmodefunction', draftMode())
  // console.log('query', query)

  if (preview) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewBlogList data={query} />
      </PreviewProvider>
    )
  }
  const posts = await client.fetch(query)
  // console.log('query', query, 'posts', posts)
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

// {
//   posts.map((post) => (
//     <Link href={`https://www.ignite-empowerment.org/events/${post.slug.current}`} key={post._id}>
//       <div
//         key={post._id}
//         className="bg-white/0 md:px-auto md:mx-auto hover:rotate-2  hover:z-30 rounded-lg md:min-w-[305px]   flex-auto overflow-hidden justify-center shadow-lg md:shadow-none items-center "
//       >
//         <div className="rounded-lg object-cover  flex flex-col max-h-[500px]  md:px-5 justify-center self-center container px-2 items-center overflow-hidden  transform hover:scale-105 transition-transform duration-200 ease-in-out">
//           <Image
//             src={urlFor(post.mainImage).url()}
//             alt="Event image"
//             width={500}
//             height={300}
//             className=" max-h-[200px] md:min-h-[275px]  lg:max-h-[200px] max-w-xl w-full  object-cover rounded-md  drop-shadow-lg "
//           />
//           <div className="px-4 bg-white rounded-lg flex-col max-h-xl flex justify-evenly py-4 max-w-xl">
//             <div className="font-bold text-xl flex flex-col overflow-hidden items-start justify-evenly mb-2">
//               {' '}
//               <p className="font-bold">{post.title}</p>{' '}
//               <span className="flex justify-start items-start text-sm font-light">
//                 {' '}
//                 <p>
//                   {new Date(post._createdAt).toLocaleDateString('en-US', {
//                     day: 'numeric',
//                     month: 'long',
//                     year: 'numeric',
//                   })}
//                 </p>
//               </span>
//             </div>
//             <p className="text-gray-700 line-clamp-2 overflow-hidden overflow-y-scroll relative text-base">
//               {post.description}
//             </p>
//             <div className="flex-row flex justify-start self-start pt-4">
//               <p className=" hover:bg-green-500 hover:text-yellow-300 group-hover:underline text-cyan-500 leading-5 tracking-wide font-bold py-2 px-4 rounded">
//                 Learn More...
//                 <ArrowUpRightIcon className="ml-2 h-4 w-4" />
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   ))
// }
