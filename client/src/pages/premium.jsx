import React from 'react'
import { Link } from 'react-router-dom'

function Premium() {
  return (
    <section className=" bg-darkPrimary pb-20">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-darkTextPrimary">
        Supercharge Your YouTube Channel with AiAsum Premium Promotion Services
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Are you a passionate YouTuber looking to grow your channel and gain more subscribers? Well, look no further! We have just what you need. Our web app provides an incredible platform for promoting your YouTube content and reaching a wider audience. With our premium promotion services, you'll take your channel to new heights and skyrocket your subscriber count.
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {/* Pricing Card */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border-4 border-darkSecondary bg-darkPrimary shadow xl:p-8  cursor-pointer hover:scale-105 transition-all">
          <h3 className="mb-4 text-2xl font-semibold text-pinkPrimary">Level 1</h3>
          <p className="font-light text-darkTextPrimary sm:text-lg">
            Best option to grow your personal YouTube channel &amp; your income.
          </p>
          <div className="flex justify-center items-baseline mt-8">
            <span className="mr-2 text-5xl font-extrabold text-pinkPrimary">$29</span>
            <span className=" text-darkTextPrimary font-semibold">/ month</span>
          </div>

          <span className="text-xl mt-3 mb-7 font-extrabold text-pinkPrimary uppercase">1K subscribers</span>

          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>You can submit one Youtube link</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>1K Subscribers within 3 weeks</span>
            </li>

          </ul>
          <Link
            href="#"
            className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-pinkPrimary hover:bg-pink-500 transition-all"
          >
            Get started
          </Link>
        </div>

          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border-4 border-darkSecondary bg-darkPrimary shadow xl:p-8  cursor-pointer hover:scale-105 transition-all">
          <h3 className="mb-4 text-2xl font-semibold text-pinkPrimary">Level 2</h3>
          <p className="font-light text-darkTextPrimary sm:text-lg">
            Best option to grow your personal YouTube channel &amp; your income.
          </p>
          <div className="flex justify-center items-baseline mt-8">
            <span className="mr-2 text-5xl font-extrabold text-pinkPrimary">$60</span>
            <span className=" text-darkTextPrimary font-semibold">/ month</span>
          </div>

          <span className="text-xl mt-3 mb-7 font-extrabold text-pinkPrimary uppercase">3K subscribers</span>

          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>You can submit up to two Youtube links</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>3.5K subscribers for 1 link and additional 500 subscribers for the other link</span>
            </li>

            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>3K Subscribers within 3 weeks</span>
            </li>

            
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>Get 1K views on a youtube video</span>
            </li>

          </ul>
          <Link
            href="#"
            className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-pinkPrimary hover:bg-pink-500 transition-all"
          >
            Get started
          </Link>
        </div>

          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border-4 border-darkSecondary bg-darkPrimary shadow xl:p-8  cursor-pointer hover:scale-105 transition-all">
          <h3 className="mb-4 text-2xl font-semibold text-pinkPrimary">Level 2</h3>
          <p className="font-light text-darkTextPrimary sm:text-lg">
            Best option to grow your personal YouTube channel &amp; your income.
          </p>
          <div className="flex justify-center items-baseline mt-8">
            <span className="mr-2 text-5xl font-extrabold text-pinkPrimary">$100</span>
            <span className=" text-darkTextPrimary font-semibold">/ month</span>
          </div>

          <span className="text-xl mt-3 mb-7 font-extrabold text-pinkPrimary uppercase">10K subscribers</span>

          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>You can submit up to four Youtube links</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>10K subscribers for the main link </span>
            </li>

            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>Additional 2K subscribers for each of the other links</span>
            </li>

            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>16K subscribers in 3 weeks</span>
            </li>

            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className=' text-darkTextPrimary font-semibold'>Get 5K views on two youtube videos</span>
            </li>

          </ul>
          <Link
            href="#"
            className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-pinkPrimary hover:bg-pink-500 transition-all"
          >
            Get started
          </Link>
        </div>

      </div>
    </div>
  </section>
  
  )
}

export default Premium