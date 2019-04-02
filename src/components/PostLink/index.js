import {Link} from 'gatsby'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
import MasonryItem from '../MasonryItem'

const styles = css`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    opacity: 0.875;
  }

  > div {
    border: 1px solid #e9e9e9;
    border-top-width: 0px;
    background-color: #fafafa;
    padding: 16px;
  }

  .title {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  .description {
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-size: 16px;
    line-height: 26px;
    padding-top: 3px;
  }

  .date {
    font-size: 16px;
    color: #999;
    padding-top: 2px;
  }
`

export default ({frontmatter, fields}) => {
  const {slug, date} = fields
  const {thumbnail, title, description} = frontmatter
  const {sizes} = thumbnail.childImageSharp

  return (
    <MasonryItem>
      <Link css={styles} to={slug}>
        <Img {...{sizes}} />
        <div>
          <div className='title' children={title} />
          <div className='description' children={description} />
          <div className='date' children={date} />
        </div>
      </Link>
    </MasonryItem>
  )
}
