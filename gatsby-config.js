require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  localeFilter: (locale) => locale.code === 'zh-CN',
}

const youtubeAPIKey = process.env.YOUTUBE_API_KEY
const githubAPIKey = process.env.GITHUB_API_KEY
const { spaceId, accessToken } = contentfulConfig

if (process.env.gatsby_executing_command != 'serve') {
  if (!spaceId || !accessToken) {
    throw new Error(
      'Contentful spaceId and the access token need to be provided.'
    )
  }

  if (!youtubeAPIKey) {
    throw new Error('YouTube API key needs to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    siteUrl: 'https://theseed.website',
    title: 'TheSeed',
    titleTemplate: 'TheSeed | %s',
    description:
      'A personal portfolio website for theseed showcasing the photography, YouTube videos, coding projects, and work history.',
    banner: '/images/logo_horiz_crop.png',
    headline: 'A Personal Portfolio Website for TheSeed',
    siteLanguage: 'en',
    ogLanguage: 'en_US',
    author: '',
    twitter: '',
    facebook: '',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-source-youtube-v2',
    //   options: {
    //     channelId: 'UC85kVC3lWW0977JkTSj7GRw',
    //     apiKey: youtubeAPIKey,
    //     maxVideos: 10,
    //   },
    // },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: githubAPIKey,
        graphQLQuery: `
          query {
            viewer {
              repositories(last: 10, orderBy: {field: PUSHED_AT, direction: DESC}) {
                totalCount
                nodes {
                  name
                  description
                  url
                  stargazers {
                    totalCount
                  }
                  readme: object(expression:"master:README.md"){
                    ... on Blob{
                      text
                    }
                  }
                }
              }
            }
          }
        `,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Manrope:200,300,400,500,600,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TheSeed',
        short_name: 'theseed',
        start_url: '/',
        background_color: '#342e37',
        theme_color: '#342e37',
        display: 'standalone',
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
