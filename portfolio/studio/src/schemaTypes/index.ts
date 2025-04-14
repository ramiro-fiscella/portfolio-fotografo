import blockContent from './objects/blockContent'
import post from './documents/album'
import coverImage from './documents/coverImage'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [post, blockContent, coverImage]
