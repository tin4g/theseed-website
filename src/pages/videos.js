import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Video from '../components/Video'
import Header from '../components/Header'

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const youtubeVideos = data.allYoutubeVideo.edges

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <div className="w-full max-w-5xl mx-auto">

        <div className="flex w-full flex-wrap justify-center items-end mt-8">

          {youtubeVideos.map(({ node: youtubeVideo }) => {
            return (
              <div className="flex flex-no-wrap w-full md:w-1/2 justify-center items-center pb-6 px-4" key={youtubeVideo.videoId}>
                <div className="w-full">
                  <h3 className="w-full text-left text-2xl font-manrope font-light text-themeBlue mb-2">
                    {youtubeVideo.title}
                  </h3>
                  <div className="w-full h-64 mb-2 picture-border-sm-2">
                    <Video
                      videoSrcURL={
                        'https://www.youtube.com/embed/' + youtubeVideo.videoId
                      }
                      videoTitle={youtubeVideo.title}
                      className="h-full w-full"
                    />
                  </div>
                </div>
  
              </div>
            )
          })}
        </div>

      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Videos {
    site {
      siteMetadata {
        title
      }
    }
    allYoutubeVideo {
      edges {
        node {
          title
          description
          videoId
        }
      }
    }
  }
`
