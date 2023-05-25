import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import { ComputedFields } from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields<"Blog"> | undefined = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
}

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blogs/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: 'string', required: true },
        description: { type: "string" },
        date: { type: "date", required: true }
    },
    computedFields,
}))

export default makeSource({ contentDirPath: './content', documentTypes: [Blog] })