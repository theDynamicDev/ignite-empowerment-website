'use client'

import {useLiveQuery} from 'next-sanity/preview'
import {query, DocumentsCount} from 'components/DocumentsCount'

export default function PreviewDocumentsCount({data: initialData}) {
  const [data] = useLiveQuery(initialData, query)

  return <DocumentsCount data={data} />
}
