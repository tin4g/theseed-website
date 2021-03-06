import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Video from '../components/Video'
import Img from 'gatsby-image'
import Header from '../components/Header'
import ArtboardPreview from '../components/ArtboardPreview'
import PhotoCollectionPreview from '../components/PhotoCollectionPreview'

const Index = ({ data }) => {
  const profilePicture = data.contentfulSiteData.featuredImage
  const artboards = data.allContentfulArtboard.edges
  const photoCollections = data.allContentfulPhotoCollection.edges
  // const youtubeVideos = data.allYoutubeVideo.edges
  const githubRepos = data.githubData.data.viewer.repositories.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex w-full flex-wrap sm:flex-no-wrap mt-6 sm:mt-8 justify-center">
          <div className="flex w-full flex-wrap justify-center mt-3">
            <p className="w-full text-center text-3xl sm:text-4xl lg:text-5xl font-light">
              [TheSeed][PLACEHOLDER]
            </p>
          </div>

          {/* <Link
            to="/about/"
            className="picture-border-sm-1 mx-10 mt-2 sm:mt-0 sm:mx-0 w-full sm:w-3/5 max-w-xl hover:picture-border-sm-2 duration-500"
          >
            <Img alt="Featured Image" fluid={profilePicture.fluid} />
          </Link>

          <div className="flex flex-wrap w-full sm:w-2/5 font-manrope mt-2 sm:mt-0 px-1 sm:px-6 content-center max-w-lg">
            <p className="w-full text-center text-3xl sm:text-4xl lg:text-5xl font-light">
              I'm
              <Link
                to="/about/"
                className="inline text-themeBlue hover:text-themeRed duration-500"
              >
                {' '}
                Max.
              </Link>
            </p>
            <p className="w-full text-center sm:text-left md:text-center text-lg sm:text-xl lg:text-2xl font-light pt-1 ml-2 sm:ml-0 sm:pt-3">
              I study
              <a
                href="https://ece.illinois.edu/"
                target="_blank"
                rel="noreferrer"
                className="inline text-themeBlue hover:text-themeRed duration-500"
              >
                {' '}
                computer engineering
              </a>{' '}
              at
              <a
                href="https://illinois.edu/"
                target="_blank"
                rel="noreferrer"
                className="inline text-themeRed hover:text-themeBlue duration-500"
              >
                {' '}
                UIUC
              </a>
            </p>
            <p className="w-full text-center sm:text-left md:text-center text-lg lg:text-xl font-light pt-1 ml-2 sm:ml-0 sm:pt-4 ">
              I also take
              <Link
                to="/photos/"
                className="inline text-themeBlue hover:text-themeRed duration-500"
              >
                {' '}
                pictures
              </Link>
              , make
              <Link
                to="/videos/"
                className="inline text-themeBlue hover:text-themeRed duration-500"
              >
                {' '}
                videos
              </Link>
              , write
              <a
                href="https://github.com/maxemitchell"
                target="_blank"
                rel="noreferrer"
                className="inline text-themeBlue hover:text-themeRed duration-500"
              >
                {' '}
                normal code
              </a>
              , and write
              <Link
                to="/code_art/"
                className="inline text-themeBlue hover:text-themeRed duration-500"
              >
                {' '}
                creative code
              </Link>
            </p>
          </div> */}
        </div>

        <div className="flex w-full flex-wrap justify-center mt-3">
          <Header variant="3">recent artboards</Header>

          {artboards.map(({ node: artboard }) => {
            return (
              <ArtboardPreview
                slug={artboard.slug}
                title={artboard.title}
                fluid={artboard.artboard.fluid}
              />
            )
          })}
        </div>

        <div className="flex w-full flex-wrap justify-around items-end">
          <Header variant="3">recent photo collections</Header>

          {photoCollections.map(({ node: photoCollection }) => {
            return (
              <PhotoCollectionPreview
                slug={photoCollection.slug}
                title={photoCollection.title}
                fluid={photoCollection.featuredImage.fluid}
              />
            )
          })}
        </div>

        <div className="flex w-full flex-wrap justify-center">
          <Header variant="3">recent video</Header>

          <p className="w-full text-center text-3xl sm:text-4xl lg:text-5xl font-light">
            [TheSeed][PLACEHOLDER]
          </p>

          {/* {youtubeVideos.map(({ node: youtubeVideo }) => {
            return (
              <div className="w-full h-64 md:h-96 lg:h-128 mx-4 mb-5 mt-4 picture-border-sm-1">
                <Video
                  videoID={youtubeVideo.videoId}
                  videoTitle={youtubeVideo.title}
                  className="h-full w-full"
                />
              </div>
            )
          })} */}
        </div>

        <div className="flex w-full flex-wrap justify-center">
          <Header variant="3">recent code repos</Header>

          {githubRepos.slice(0, 3).map((repo, index) => {
            return (
              <a
                className="flex flex-wrap w-full justify-center items-center mt-2 mb-3 mx-4 hover:code-bg duration-500"
                key={index}
                href={repo.url}
                target="_blank"
              >
                <h3 className="w-full text-left text-2xl font-manrope font-light text-themeBlue mb-2">
                  {repo.name}
                </h3>
                <p className="w-full text-base font-manrope font-thin">
                  {repo.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    contentfulSiteData {
      featuredImage {
        fluid(maxHeight: 620) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    allContentfulArtboard(
      limit: 2
      sort: { fields: artboardDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          artboard {
            fluid(maxWidth: 1100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    allContentfulPhotoCollection(
      limit: 4
      sort: { fields: collectionDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          featuredImage {
            fluid(maxHeight: 520) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    githubData {
      data {
        viewer {
          repositories {
            totalCount
            nodes {
              description
              name
              url
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query Index {
//     contentfulSiteData {
//       featuredImage {
//         fluid(maxHeight: 620) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//     }
//     allContentfulArtboard(
//       limit: 2
//       sort: { fields: artboardDate, order: DESC }
//     ) {
//       edges {
//         node {
//           title
//           slug
//           artboard {
//             fluid(maxWidth: 1100) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//     allContentfulPhotoCollection(
//       limit: 4
//       sort: { fields: collectionDate, order: DESC }
//     ) {
//       edges {
//         node {
//           title
//           slug
//           featuredImage {
//             fluid(maxHeight: 520) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//     allYoutubeVideo(limit: 1) {
//       edges {
//         node {
//           title
//           description
//           videoId
//         }
//       }
//     }
//     githubData {
//       data {
//         viewer {
//           repositories {
//             totalCount
//             nodes {
//               description
//               name
//               url
//               stargazers {
//                 totalCount
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
