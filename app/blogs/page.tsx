import { compareDesc } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import BlogCard from '@/components/blog-card'


export default function Blogs() {
    const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <>
            <div className='max-w-7xl mx-auto px-5 py-10'>

                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>Enjoy 📖</h1>
                </div>

                {/* Render Blog card */}
                {blogs.map((item, index) => {
                    return <BlogCard key={index} {...item} />
                })}
            </div>
        </>
    )
}
