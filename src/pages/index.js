import {graphql} from 'gatsby'
import {Masonry} from 'react-masonry-responsive'
import {PostLink, GlobalStyle} from '~/components'
import {css} from '@emotion/core'

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [fields___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
            key
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
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

const styles = css`
  padding: 8px;
`

export default ({
  data: {
    allMarkdownRemark: {edges: posts},
  },
}) => (
  <>
    <GlobalStyle />
    <div css={styles}>
      <Masonry
        items={posts.map(({node}) => {
          const {key} = node.fields
          return {key, node: <PostLink {...node} />}
        })}
        minColumnWidth={256}
        gap={0}
      />
    </div>
  </>
)
