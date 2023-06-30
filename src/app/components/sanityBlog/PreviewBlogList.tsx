'use client'
import {useLiveQuery} from 'next-sanity/preview'

import BlogList from './BlogList'

type Props = {
  query: string
}

export default function PreviewBlogList({query}: Props) {
  const [posts, loading] = useLiveQuery(null, query)
  //   const posts = useLiveQuery(null, query)
  if (loading) {
    return <>Loading...</>
  }
  console.log('LOADING posts...', posts)
  return <BlogList posts={posts} />
}
