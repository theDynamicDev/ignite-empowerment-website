'use client'

import {useLiveQuery} from 'next-sanity/preview'
import {query, BlogList} from './BlogList'

export default function PreviewDocumentsCount({data: initialData}) {
  const [data, loading] = useLiveQuery(initialData, query)

  if (loading) {
    return <>Loading...</>
  }

  return <BlogList data={data} />
}
