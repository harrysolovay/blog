import {graphql} from 'gatsby'
import {Masonry} from 'react-masonry-responsive'
import {PostLink, GlobalStyle} from '~/components'

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
            key
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            redirect
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ({
  data: {
    allMarkdownRemark: {edges: posts},
  },
}) => (
  <>
    <GlobalStyle />
    <Masonry
      items={posts.map(({node}) => {
        const {key} = node.fields
        return {key, node: <PostLink {...node} />}
      })}
      minColumnWidth={256}
      gap={0}
    />
  </>
)
