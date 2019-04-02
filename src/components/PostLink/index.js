import {Link} from 'gatsby'
import {css} from '@emotion/core'
import Img from 'gatsby-image'

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
  }

  .title {
    font-weight: 400;
  }

  .description {
    font-family: 'raleway', sans-serif;
    text-transform: none;
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
  const A = props => <Link to={fields.slug} {...props} />

  const {thumbnail, title, description, date} = frontmatter
  const {sizes} = thumbnail.childImageSharp

  return (
    <div css={styles}>
      <A>
        <Img {...{sizes}} />
      </A>
      <div>
        <A className='title' children={title} />
        <div className='description' children={description} />
        <div className='date' children={date} />
      </div>
    </div>
  )
}
