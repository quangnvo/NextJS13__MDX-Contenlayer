import { Blog } from "@/.contentlayer/generated";
import Link from "next/link";
import moment from 'moment';

export default function BlogCard(blog: Blog) {
    return (
        <div className="mb-14">
            <div className="w-full px-6 py-8 rounded-xl mt-10 bg-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Thông tin bài viết */}
                    <div className="col-span-1 flex justify-center items-center ">
                        <div className="w-10/12">

                            {/* Blog title */}
                            <Link
                                href={blog.slug}
                                className="text-2xl font-semibold hover:font-extrabold"
                            >
                                {blog.title}
                            </Link>

                            {/* Date */}
                            <div>{moment(blog.date).format("DD-MM-YYYY")}</div>

                            {/* Description */}
                            <div>Summary here</div>
                        </div>
                    </div>

                    {/* Hình đại diện của bài viết */}
                    <div className="mt-10 md:mt-0 col-span-1 px-4 py-5 rounded-xl min-h-[15rem] bg-gray-600">

                    </div>
                </div>
            </div>

        </div>
    )
}