import React from 'react'
import {graphql} from 'gatsby'

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default props => <div>{JSON.stringify(props)}</div>
