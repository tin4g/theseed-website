import React from 'react'
import GithubLogo from '../images/github.svg'
import InstagramLogo from '../images/instagram.svg'
import LinkedInLogo from '../images/linkedin.svg'
import YouTubeLogo from '../images/youtube.svg'

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap sm:flex-no-wrap w-full justify-evenly items-baseline sm:justify-center font-manrope font-medium text-base md:text-lg mb-6 mt-3">
      <a
        href="https://www.instagram.com"
        target="_blank"
        className="flex flex-no-wrap mt-3 text-themeOffWhite hover:text-themeBlue hover:border-corners rounded-tr-lg rounded-bl-lg duration-300 items-center mr-5"
      >
        <InstagramLogo className="w-6 h-6 md:w-8 md:h-8" />
        <p className="ml-2">Instagram</p>
      </a>
      <a
        href="https://github.com"
        target="_blank"
        className="flex flex-no-wrap mt-3 text-themeOffWhite hover:text-themeBlue hover:border-corners rounded-tr-lg rounded-bl-lg duration-300 items-center mr-5"
      >
        <GithubLogo className="w-6 h-6 md:w-8 md:h-8" />
        <p className="ml-2">Github</p>
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        className="flex flex-no-wrap mt-3 text-themeOffWhite hover:text-themeBlue hover:border-corners rounded-tr-lg rounded-bl-lg duration-300 items-center mr-5"
      >
        <LinkedInLogo className="w-6 h-6 md:w-8 md:h-8" />
        <p className="ml-2">LinkedIn</p>
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        className="flex flex-no-wrap mt-5 text-themeOffWhite hover:text-themeBlue hover:border-corners rounded-tr-lg rounded-bl-lg duration-300 items-"
      >
        <YouTubeLogo className="w-6 h-6 md:w-8 md:h-8" />
        <p className="ml-2">YouTube</p>
      </a>
    </div>
  )
}

export default SocialMedia
