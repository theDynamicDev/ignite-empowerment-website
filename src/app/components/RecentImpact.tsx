import React from 'react'
import ImpactCarousel from '../components/ui/ImpactCarousel'
import getClient from '../../lib/sanity'
import {groq} from 'next-sanity'
const client = getClient({})
const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

async function RecentImpact() {
  const data = await client.fetch(query)
  console.log('data', data)
  return (
    <div className=" w-screen  z-40">
      <ImpactCarousel posts={data} />
    </div>
  )
}

export default RecentImpact
