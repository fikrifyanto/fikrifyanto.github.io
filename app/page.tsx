"use client"

import { useEffect } from "react"
import { CldImage } from "next-cloudinary"

export default function Home() {
  useEffect(() => {
    const title = document.getElementById("title")
    const firstCircle = document.getElementById("first-circle")
    const secondCircle = document.getElementById("second-circle")

    if (title) {
      setTimeout(() => {
        title.classList.remove("translate-y-96")
      }, 4000)
    }

    if (firstCircle) {
      firstCircle.classList.add("scale-100")
      firstCircle.classList.add("translate-x-0")
      firstCircle.classList.add("translate-y-0")
      firstCircle.classList.remove("scale-0")
      firstCircle.classList.remove("translate-x-[28%]")
      firstCircle.classList.remove("translate-y-[40%]")
    }

    if (secondCircle) {
      secondCircle.classList.add("delay-[3.5s]")
      secondCircle.classList.add("scale-100")
      secondCircle.classList.add("translate-x-0")
      secondCircle.classList.add("translate-y-0")
      secondCircle.classList.remove("scale-0")
      secondCircle.classList.remove("translate-x-[55%]")
      secondCircle.classList.remove("translate-y-[68%]")
    }

    const aurora1 = document.getElementById("aurora-1")
    const aurora2 = document.getElementById("aurora-2")
    const aurora3 = document.getElementById("aurora-3")
    const aurora4 = document.getElementById("aurora-4")

    let currentBinary = true
    if (aurora1 && aurora2 && aurora3 && aurora4) {
      setInterval(() => {
        if (currentBinary) {
          aurora1.classList.remove("scale-[2]")
          aurora2.classList.remove("scale-[2]")
          aurora3.classList.remove("scale-[1]")
          aurora4.classList.remove("scale-[2]")
          aurora1.classList.add("scale-[3]")
          aurora2.classList.add("scale-[1.5]")
          aurora3.classList.add("scale-[2]")
          aurora4.classList.add("scale-[1]")
        } else {
          aurora1.classList.remove("scale-[3]")
          aurora2.classList.remove("scale-[1.5]")
          aurora3.classList.remove("scale-[2]")
          aurora4.classList.remove("scale-[1]")
          aurora1.classList.add("scale-[2]")
          aurora2.classList.add("scale-[2]")
          aurora3.classList.add("scale-[1]")
          aurora4.classList.add("scale-[2]")
        }
        currentBinary = !currentBinary
      }, 4000)
    }

    const banners = document.querySelectorAll(".banner")

    let isBannerActive = false
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500 && !isBannerActive) {
        banners.forEach((banner) => {
          banner.classList.add("banner-active")
          banner.addEventListener("mouseenter", function () {
            banners.forEach((banner) => {
              banner.classList.add("pause-animation")
            })
          })

          banner.addEventListener("mouseleave", function () {
            banners.forEach((banner) => {
              banner.classList.remove("pause-animation")
            })
          })
        })

        isBannerActive = true
      }
    })
  }, [])

  return (
    <>
      <div
        id="about"
        className="bg-gradient-to-b from-teal-700 to-blue-600 h-screen w-screen flex items-center justify-center relative">
        <div
          id="aurora-1"
          className="absolute transition-all duration-[4000ms] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 opacity-80 h-96 w-96 rounded-full -left-40 -top-40 scale-[2] blur-3xl z-10"></div>
        <div
          id="aurora-2"
          className="absolute transition-all duration-[4000ms] bg-gradient-to-r from-green-200 via-green-400 to-purple-700 opacity-80 h-96 w-96 rounded-full right-40 top-40 scale-[2] blur-3xl z-10"></div>
        <div
          id="aurora-3"
          className="absolute transition-all duration-[4000ms] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-60 h-96 w-96 rounded-full left-40 top-40 blur-3xl z-10"></div>
        <div
          id="aurora-4"
          className="absolute transition-all duration-[4000ms] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-60 h-96 w-96 rounded-full mx-auto -top-20 scale-[2] blur-3xl z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 overflow-hidden">
          <svg
            className="scale-[.8] md:scale-[.9] mt-14"
            xmlns="http://www.w3.org/2000/svg"
            width={511}
            height={511}
            viewBox="0 0 511 511"
            fill="none">
            <path
              className="animate-draw stroke-slate-200"
              d="M152.5 221.516C154.667 231.183 163.3 251.016 180.5 253.016C202 255.516 255 225.016 300.5 176.016C352.5 120.016 360.5 47.5161 312.5 40.5161C264.5 33.5161 219 98.5161 196 187.016C176.999 260.129 189.286 371.596 223.5 421.016C255 466.516 294 481.516 271 437.016C239.106 375.307 180.5 376.516 160 403.516C148.545 418.603 218 394.016 271 357.516"
              strokeWidth={12}
            />
            <circle
              id="first-circle"
              className="scale-0 translate-x-[28%] translate-y-[40%] transition duration-300 stroke-slate-200"
              cx="147.5"
              cy="201.016"
              r="17.5"
              strokeWidth={12}
            />
            <circle
              id="second-circle"
              className="scale-0 transition translate-x-[55%] translate-y-[68%] duration-300 stroke-slate-200"
              cx="286.5"
              cy="344.016"
              r="17.5"
              strokeWidth={12}
            />
          </svg>
          <div className="text-center transition duration-300 translate-y-96" id="title">
            <h1 className="">
              <span className="text-3xl md:text-7xl font-acorn text-transparent text-stroke-slate-200 text-stroke-2 relative">
                Hi, I&apos;m Fikri.
              </span>
              <span className="text-3xl md:text-7xl font-acorn text-white ml-4">Call Me Pik!</span>
            </h1>
            <p className="font-gt text-white mt-6 text-sm md:text-xl px-8">
              I&apos;m passionate about crafting experiences that are engaging, accessible, and
              user-centric.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto min-h-screen px-8 py-20 md:py-40 flex flex-col lg:flex-row justify-center gap-10 text-white">
        <div className="flex flex-col gap-4 px-16">
          <CldImage
            className="rounded-full mx-auto"
            src="images/profile.webp"
            alt="Profile Page"
            width={300}
            height={300}
            style={{ width: 200, height: 200 }}
          />
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1SxfyVK_mW8wV8VtyDNgt1eMuy-JjvWon?usp=drive_link"
            className="flex items-center gap-2 justify-center px-4 rounded-full py-2 font-gt bg-white/20 hover:bg-lime-900/30 mt-4">
            14 Certificates
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <a
            href="https://drive.google.com/file/d/1ihOcY9qo0vSrkoLrQJlbZ6bOBr4iLwqe/view?usp=sharing"
            target="_blank"
            className="bg-white/20 py-2 px-4 flex items-center gap-2 justify-center rounded-full text-white transition hover:bg-lime-900/30 font-gt">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
        <div>
          <h2 className="text-4xl md:text-7xl font-acorn text-center lg:text-left">Experience</h2>
          <div className="flex flex-col gap-8 lg:gap-14 mt-14">
            <div className="flex items-start gap-4">
              <CldImage
                src="images/waste4change.webp"
                alt="Waste4Change Logo"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-xl font-acorn">Fullstack Engineer</h3>
                <div className="font-gt mt-1">Waste4Change</div>
                <div className="font-gt">Oct 2021 - Present · 2 yrs 5 mos</div>
                <div className="font-gt">Semarang, Central Java, Indonesia · Remote</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CldImage
                src="images/naetalab.webp"
                alt="Waste4Change Logo"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-xl font-acorn">Junior Developer</h3>
                <div className="font-gt">CV. Naetalab Teknologi</div>
                <div className="font-gt">Jun 2020 - Sep 2021 · 1 yr 4 mos</div>
                <div className="font-gt">Sumedang, West Java, Indonesia · On-site</div>
                <h3 className="text-xl font-acorn mt-8 lg:mt-14">Freelance</h3>
                <div className="font-gt">Jun 2019 - Present · 4 yrs 9 mos</div>
                <div className="font-gt">Remote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-600 via-indigo-500 to-teal-500">
        <div id="work" className="px-8 md:h-screen py-20 md:py-40 relative overflow-y-hidden">
          <div className="max-w-4xl mx-auto -mt-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-left font-acorn text-white text-4xl md:text-7xl">
                  Send Your Waste.
                </h2>
                <p className="text-lg text-white text-left mt-4">
                  A web app for individual reponsible waste management collection in Indonesia.
                </p>
              </div>
              <div className="flex lg:block gap-2 flex-wrap">
                <a
                  href="https://app.waste4change.com"
                  target="_blank"
                  className="flex justify-betwee text-white font-semibold font-gt gap-2 mt-8 bg-lime-900/30 hover:bg-lime-900/50 py-2 px-6 rounded-full">
                  Launch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="rounded-full px-4 text-white border-2 border-white/50">Web</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">Nuxt</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">Vue</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">
                TailwindCSS
              </div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">Laravel</div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-5 md:ml-72 group">
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition md:-mr-10 md:mt-10 md:-rotate-12 group-hover:rotate-0"
                src="images/sendyourwaste/1.webp"
                width={400}
                height={600}
                style={{ width: 180, height: 380 }}
                sizes="180"
                alt="Sendyourwaste"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition -mt-80 ml-auto mr-8 md:mt-0 md:-mr-10 md:mb-10 md:translate-y-6 group-hover:translate-y-0"
                src="images/sendyourwaste/2.webp"
                width={400}
                height={600}
                style={{ width: 180, height: 380 }}
                alt="Sendyourwaste"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition -mt-80 ml-4 md:-mr-10 md:mt-10 md:-translate-y-10 group-hover:translate-y-0"
                src="images/sendyourwaste/3.webp"
                width={400}
                height={600}
                style={{ width: 180, height: 380 }}
                alt="Sendyourwaste"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition ml-auto mr-14 -mt-72 md:mt-0 md:-mr-10 md:mb-10 md:rotate-12 group-hover:rotate-0"
                src="images/sendyourwaste/4.webp"
                width={400}
                height={600}
                style={{ width: 180, height: 380 }}
                alt="Sendyourwaste"
              />
            </div>
          </div>
          <div className="-rotate-[30.6deg] w-[300px] -mt-[10rem] h-[calc(600px*7)] hidden md:flex flex-col gap-10 absolute inset-y-0 left-[57%]">
            {(() => {
              const images = []
              for (let i = 5; i <= 11; i++) {
                images.push(
                  <CldImage
                    loading="lazy"
                    key={i}
                    className="rounded-xl banner"
                    src={`images/sendyourwaste/${i}.webp`}
                    width={700}
                    height={1000}
                    style={{ width: 300, height: 600 }}
                    alt={`Sendyourwaste Screenshot ${i + 1}`}
                  />
                )
              }
              return images
            })()}
          </div>
        </div>
        <div className="px-8 md:h-screen py-20 md:py-40 relative overflow-y-hidden">
          <div className="max-w-4xl mx-auto -mt-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-left font-acorn text-white text-4xl md:text-7xl">
                  Waste4Change.
                </h2>
                <p className="text-sm md:text-lg text-white text-left mt-4">
                  Beautiful website for portoflio, achievement, project showcase, publication file
                  and many things information about Waste4change a Startup Environment in Indonesia.
                </p>
              </div>
              <div className="flex lg:block gap-2 flex-wrap">
                <a
                  href="https://waste4change.com"
                  target="_blank"
                  className="flex justify-between text-white font-semibold font-gt gap-2 mt-8 bg-lime-900/30 hover:bg-lime-900/50 py-2 px-6 rounded-full">
                  Launch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="rounded-full px-4 text-white border-2 border-white/50">Web</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">
                Codeigniter
              </div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">AlpineJS</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">
                TailwindCSS
              </div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">
                Javascript
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-10 md:mt-20 md:ml-44 group">
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto md:ml-0 md:group-hover:rotate-0 md:-rotate-12 md:group-hover:-ml-20"
                src="images/waste4change/1.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="Waste4change"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all mr-auto -mt-20 md:group-hover:-mt-44 md:group-hover:rotate-0 md:ml-40 md:rotate-12 md:-mt-32"
                src="images/waste4change/2.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="Waste4change"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto -mt-20 md:group-hover:-mt-52 md:group-hover:rotate-0 md:rotate-12 md:ml-80 md:-mt-72"
                src="images/waste4change/3.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="Waste4change"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto -mt-40 md:-mt-32 md:ml-auto md:-rotate-12 md:group-hover:rotate-0"
                src="images/waste4change/mobile-2.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="Waste4change"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto mr-8 -mt-40 md:-mt-96 md:ml-auto md:-mr-20 md:rotate-12 md:group-hover:rotate-0"
                src="images/waste4change/mobile-1.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="Waste4change"
              />
              <CldImage
                loading="lazy"
                className="md:hidden rounded-lg shadow-xl transition-all ml-auto mr-16 -mt-40 md:-mt-96 md:ml-auto md:-mr-20 md:rotate-12 md:group-hover:rotate-0"
                src="images/waste4change/mobile-3.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="Waste4change"
              />
            </div>
          </div>
          <div className="-rotate-[30.6deg] w-[300px] -mt-[10rem] h-[calc(600px*7)] hidden md:flex flex-col gap-10 absolute inset-y-0 left-[57%]">
            {(() => {
              const images = []
              for (let i = 1; i <= 7; i++) {
                images.push(
                  <CldImage
                    loading="lazy"
                    key={i}
                    className="rounded-xl banner"
                    src={`images/waste4change/mobile-${i}.webp`}
                    width={700}
                    height={1000}
                    style={{ width: 300, height: 600 }}
                    alt={`Waste4change Mobile Screenshot ${i + 1}`}
                  />
                )
              }
              return images
            })()}
          </div>
        </div>
        <div className="px-8 md:h-screen py-20 md:py-40 relative overflow-y-hidden">
          <div className="max-w-4xl mx-auto -mt-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-left font-acorn text-white text-4xl md:text-7xl">
                  Blog4Change.
                </h2>
                <p className="text-lg text-white text-left mt-4">
                  Georgeous and informative Blog about environment.
                </p>
              </div>
              <div className="flex lg:block gap-2 flex-wrap">
                <a
                  href="https://waste4change.com/blog"
                  target="_blank"
                  className="flex justify-between text-white font-semibold font-gt gap-2 mt-8 bg-lime-900/30 hover:bg-lime-900/50 py-2 px-6 rounded-full">
                  Launch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="rounded-full px-4 text-white border-2 border-white/50">Web</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">
                Wordpress Custom Theme
              </div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">PHP</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">
                TailwindCSS
              </div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">
                Javascript
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-10 md:mt-20 md:ml-44 group">
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto md:ml-0 md:group-hover:rotate-0 md:-rotate-12 md:group-hover:-ml-20"
                src="images/blog4change/1.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="Blog4Change"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all mr-auto -mt-20 md:group-hover:-mt-44 md:group-hover:rotate-0 md:ml-40 md:rotate-12 md:-mt-32"
                src="images/blog4change/2.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="Blog4Change"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto -mt-20 md:group-hover:-mt-52 md:group-hover:rotate-0 md:rotate-12 md:ml-80 md:-mt-72"
                src="images/blog4change/3.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="Blog4Change"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto -mt-40 md:-mt-32 md:ml-auto md:-rotate-12 md:group-hover:rotate-0"
                src="images/blog4change/mobile-2.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="Blog4Change"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto mr-8 -mt-40 md:-mt-96 md:ml-auto md:-mr-20 md:rotate-12 md:group-hover:rotate-0"
                src="images/blog4change/mobile-1.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="Blog4Change"
              />
              <CldImage
                loading="lazy"
                className="md:hidden rounded-lg shadow-xl transition-all ml-auto mr-16 -mt-40 md:-mt-96 md:ml-auto md:-mr-20 md:rotate-12 md:group-hover:rotate-0"
                src="images/blog4change/mobile-3.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="Blog4Change"
              />
            </div>
          </div>
          <div className="-rotate-[30.6deg] w-[300px] -mt-[10rem] h-[calc(600px*7)] hidden md:flex flex-col gap-10 absolute inset-y-0 left-[57%]">
            {(() => {
              const images = []
              for (let i = 1; i <= 7; i++) {
                images.push(
                  <CldImage
                    loading="lazy"
                    key={i}
                    className="rounded-xl banner"
                    src={`images/blog4change/mobile-${i}.webp`}
                    width={700}
                    height={1000}
                    style={{ width: 300, height: 600 }}
                    alt={`Blog4change Screenshot ${i + 1}`}
                  />
                )
              }
              return images
            })()}
          </div>
        </div>
        <div className="px-8 md:h-screen py-20 md:py-40 relative overflow-y-hidden">
          <div className="max-w-4xl mx-auto -mt-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-left font-acorn text-white text-4xl md:text-7xl">
                  JDIH Sumedang.
                </h2>
                <p className="text-lg text-white text-left mt-4">
                  Useful mobile app and website for find document and legal information of
                  government in Sumedang one of regency in Indonesia.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap mt-8">
                <a
                  href="https://app.waste4change.com"
                  target="_blank"
                  className="flex justify-between items-center text-white font-semibold font-gt gap-2 bg-lime-900/30 hover:bg-lime-900/50 lg:h-11 px-6 rounded-full">
                  Launch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sumedang.jdih&pli=1"
                  target="_blank"
                  className="flex justify-between items-center text-white font-semibold font-gt gap-2 bg-lime-900/30 hover:bg-lime-900/50 lg:h-11 px-6 rounded-full">
                  See On Play Store
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="rounded-full px-4 text-white border-2 border-white/50">Web</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">Mobile</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">
                React Native
              </div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">Laravel</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">jQuery</div>
              <div className="rounded-full px-4 text-white border-2 border-white/50">Bootstrap</div>
            </div>
            <div className="flex flex-col gap-6 mt-10 md:mt-20 md:ml-44 group">
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto md:ml-0 md:group-hover:rotate-0 md:-rotate-12 md:group-hover:-ml-20"
                src="images/jdih/1.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="JDIH Sumedang"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all mr-auto -mt-20 md:group-hover:-mt-44 md:group-hover:rotate-0 md:ml-40 md:rotate-12 md:-mt-32"
                src="images/jdih/2.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="JDIH Sumedang"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto -mt-20 md:group-hover:-mt-52 md:group-hover:rotate-0 md:rotate-12 md:ml-80 md:-mt-72"
                src="images/jdih/3.webp"
                width={600}
                height={400}
                style={{ width: 300, height: 170 }}
                alt="JDIH Sumedang"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto -mt-40 md:-mt-32 md:ml-auto md:-rotate-12 md:group-hover:rotate-0"
                src="images/jdih/mobile-2.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="JDIH Sumedang"
              />
              <CldImage
                loading="lazy"
                className="rounded-lg shadow-xl transition-all ml-auto mr-8 -mt-40 md:-mt-96 md:ml-auto md:-mr-20 md:rotate-12 md:group-hover:rotate-0"
                src="images/jdih/mobile-1.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="JDIH Sumedang"
              />
              <CldImage
                loading="lazy"
                className="md:hidden rounded-lg shadow-xl transition-all ml-auto mr-16 -mt-40 md:-mt-96 md:ml-auto md:-mr-20 md:rotate-12 md:group-hover:rotate-0"
                src="images/jdih/mobile-3.webp"
                width={400}
                height={600}
                style={{ width: 150, height: 300 }}
                alt="JDIH Sumedang"
              />
            </div>
          </div>
          <div className="-rotate-[30.6deg] w-[300px] -mt-[10rem] h-[calc(600px*7)] hidden md:flex flex-col gap-10 absolute inset-y-0 left-[57%]">
            {(() => {
              const images = []
              for (let i = 1; i <= 7; i++) {
                images.push(
                  <CldImage
                    loading="lazy"
                    key={i}
                    className="rounded-xl banner"
                    src={`images/jdih/mobile-${i}.webp`}
                    width={700}
                    height={1000}
                    style={{ width: 300, height: 600 }}
                    alt={`JDIH Sumedang Screenshot ${i + 1}`}
                  />
                )
              }
              return images
            })()}
          </div>
        </div>
        <div id="contact" className="relative h-screen w-screen flex items-center justify-center">
          <div>
            <p className="text-center md:text-left font-gt text-xl text-white">
              I also worked on 12 another closed projects
            </p>
            <h2 className="text-center md:text-left font-acorn text-white text-3xl md:text-7xl">
              Interesting with me?
            </h2>
            <p className="text-center md:text-left font-gt text-xl text-white">
              Feel free to contacting me!
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/fikrifyanto/"
                target="_blank"
                className="bg-white/20 h-12 w-12 flex items-center justify-center rounded-full text-white transition hover:bg-lime-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/fikripik_/"
                target="_blank"
                className="bg-white/20 h-12 w-12 flex items-center justify-center rounded-full text-white transition hover:bg-lime-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://github.com/fikrifyanto"
                target="_blank"
                className="bg-white/20 h-12 w-12 flex items-center justify-center rounded-full text-white transition hover:bg-lime-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:fikrifyanto@gmail.com"
                className="bg-white/20 h-12 w-12 flex items-center justify-center rounded-full text-white transition hover:bg-lime-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-[1.35rem] h-[1.35rem]">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1ihOcY9qo0vSrkoLrQJlbZ6bOBr4iLwqe/view?usp=sharing"
                target="_blank"
                className="bg-white/20 h-12 px-4 flex items-center gap-2 justify-center rounded-full text-white transition hover:bg-lime-900/30 font-gt">
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 flex items-end justify-center pb-4 text-white">
            <h3>© 2023 Fikri Fri Yanto</h3>
          </div>
        </div>
      </div>
    </>
  )
}
