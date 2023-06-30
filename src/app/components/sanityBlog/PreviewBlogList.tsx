'use client'
import {useLiveQuery} from 'next-sanity/preview'
import {groq} from 'next-sanity'
import BlogList from './BlogList'
import {init} from 'next/dist/compiled/@vercel/og/satori'
type Props = {
  query: string
}
const query = groq`*[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  
 `
export default function PreviewBlogList({data: initialData}) {
  const [data, loading] = useLiveQuery(initialData, query)
  //   const posts = useLiveQuery(null, query)
  console.log('query', data, 'data type', typeof data)
  if (loading) {
    return <>Loading...</>
  }
  console.log('LOADING data...', data)
  return <BlogList posts={data} />
}
