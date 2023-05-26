import { Mdx } from '@/components/mdx-components'
import { allBlogs } from 'contentlayer/generated'
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface BlogProps {
    params: {
        slug: string[]
    }
}

// ---------- Get Blog from Params ----------
async function getBlogFromParams(params: BlogProps["params"]) {
    const slug = params?.slug?.join("/")
    const blog = allBlogs.find((item) => item.slugAsParams === slug)
    if (!blog) { null }
    return blog
}

// ---------- Generate Metadata ----------
export async function generateMetadata({ params }: BlogProps): Promise<Metadata> {
    const blog = await getBlogFromParams(params)

    if (!blog) {
        return {}
    }

    return {
        title: blog.title,
        description: blog.description,
    }
}

// ---------- Create separate Blog page for each blog ----------
export default async function BlogPage({ params }: BlogProps) {
    const blog = await getBlogFromParams(params)

    if (!blog) {
        notFound()
    }

    return (
        <>

            <article className="py-6 prose dark:prose-invert max-w-7xl mx-auto px-5">

                {/* Blog title */}
                <h1 className="mb-2 font-semibold text-3xl">{blog.title}</h1>

                {/* Blog description */}
                {blog.description && (
                    <p className="text-xl mt-0 text-slate-700 dark:text-slate-200 mb-5">
                        {blog.description}
                    </p>
                )}

                <hr className="my-4" />

                {/* Blog content */}
                <Mdx code={blog.body.code} />
            </article>
        </>
    )
}