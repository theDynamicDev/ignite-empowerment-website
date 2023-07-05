import {ArrowUpRightIcon} from '@heroicons/react/24/solid'
import Image from 'next/image'
import urlFor from '../../../lib/urlFor'
import ClientSideRoute from './ClientSideRoute'

type Props = {
  posts: Post[]
}

export default function BlogList({posts}: Props) {
  // console.log('posts in BlogList', posts)
  return (
    <div className="w-full flex justify-center items-center h-screen relative overflow-scroll bg-cyan-100/80 md:mt-32 pt-32">
      <hr className=" border-[#F7AB0A] mb-10" />
      <div className=" grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-20  h-full md:mt-36 pb-20 overflow-y-scroll">
        {posts.map((post) => (
          <ClientSideRoute route={`/events/${post.slug.current}`} key={post._id}>
            <div className="flex flex-col group w-full h-full cursor-pointer rounded-lg max-h-[500px]">
              <div className="relative w-full  h-96 drop-shadow-xl bg-transparent-flame bg-center bg-contain bg-no-repeat bg-opacity-5 group-hover:scale-105 transition-transform duration-200 ease-out">
                <div className="absolute bg-black top-0 w-full h-full backdrop-blur-lg opacity-40 p-10 z-10" />
                <Image
                  className="object-fix object-center container opacity-90 z-20 lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 z-30 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2  items-center">
                    {post.categories.map((category) => (
                      <div
                        key={category._id}
                        className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {category.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 max-h-32 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>

              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Read post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}
