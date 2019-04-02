import {join} from 'path'
// eslint-disable-next-line
import {generate as generateId} from 'shortid'

export default ({node, getNode, actions: {createNodeField}}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const {relativePath} = getNode(node.parent)

    const pieces = relativePath.split(/-|\//)
    const withoutLast = pieces.slice(0, pieces.length - 1)

    const [year, month, day, ...titlePieces] = withoutLast
    const slug = join([year, month, day].join('/'), titlePieces.join('-'))
    const date = new Date(year, month - 1, day).toJSON()

    createNodeField({
      node,
      name: 'date',
      value: date,
    })

    createNodeField({
      node,
      name: 'key',
      value: generateId(),
    })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
