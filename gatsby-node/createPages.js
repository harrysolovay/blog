import {resolve, join} from 'path'

export default async ({graphql, actions}) => {
  const {createPage} = actions

  const PostTemplatePath = resolve(
    join(__dirname, '../src/templates/Post/index.js'),
  )

  const result = await graphql(`
    {
      allMarkdownRemark(sort: {fields: [fields___date], order: DESC}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              redirect
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  } else {
    const {edges: posts} = result.data.allMarkdownRemark

    posts.forEach((post, i) => {
      const {slug} = post.node.fields
      const previous = i === posts.length - 1 ? null : posts[i + 1].node
      const next = i === 0 ? null : posts[i - 1].node

      createPage({
        path: slug,
        component: PostTemplatePath,
        context: {slug, previous, next},
      })
    })
  }

  return null
}
