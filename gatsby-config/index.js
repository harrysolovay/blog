const {join} = require('path')

const title = `Harry Solovay's Site`
const short_name = `Harry's Site`
const description = `E-Home to Harry Solovay's work and stream of consciousness`
const url = 'https://harrysolovay.com'
const author = 'Harry Solovay'

const github = 'https://github.com/harrysolovay'
const twitter = 'https://twitter.com/hsolvz'
const instagram = 'https://www.instagram.com/hsolvz/'

const background_color = '#fff'
const theme_color = '#5086ec'
const display = 'minimal-ui'
const icon = join(__dirname, '../content/images/icon.png')

const siteMetadata = {
  title,
  description,
  author,
  social: {github, twitter, instagram},
  siteUrl: url,
  // rss (?)
}

const dataSources = [
  {
    name: 'posts',
    path: join(__dirname, '../content/posts'),
  },
  {
    name: 'images',
    path: join(__dirname, '../content/images'),
  },
].map(options => ({
  resolve: 'gatsby-source-filesystem',
  options,
}))

const markdownTransformer = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-images',
        options: {maxWidth: 760},
      },
      'gatsby-remark-responsive-iframe',
      'gatsby-remark-copy-linked-files',
      'gatsby-remark-smartypants',
    ],
  },
}

const images = ['gatsby-transformer-sharp', 'gatsby-plugin-sharp']

// const googleFonts = {
//   resolve: 'gatsby-plugin-prefetch-google-fonts',
//   options: {
//     fonts: [{family: 'Raleway', subsets: 'sans-serif'}],
//   },
// }

const emotion = {
  resolve: 'gatsby-plugin-emotion',
  options: {
    sourceMap: true,
    autoLabel: process.env.NODE_ENV !== 'production',
    labelFormat: '[dirname]-[filename]-[local]',
    cssPropOptimization: true,
  },
}

const manifest = {
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: title,
    short_name,
    start_url: '/',
    background_color,
    theme_color,
    display,
    icon,
  },
}

module.exports = {
  siteMetadata,
  plugins: [
    ...dataSources,
    markdownTransformer,
    ...images,
    emotion,
    manifest,
    'gatsby-plugin-offline',
  ],
}
