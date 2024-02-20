"use client"
import { useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function Header() {
  const params = useParams()

  function showHeader() {
    const header = document.getElementById("header")
    if (header) {
      setTimeout(() => {
        header.classList.remove("-translate-y-96")
      }, 4000)

      const backdrop = document.getElementById("backdrop")
      const list = document.querySelector("#header nav ul")
      const listRect = list?.getBoundingClientRect()

      if (backdrop) {
        backdrop.style.width = listRect?.width + "px"
        backdrop.style.height = listRect?.height + "px"
      }

      window.addEventListener("scroll", function () {
        if (this.scrollY > 100) {
          backdrop?.classList.add("bg-lime-900/30")
          backdrop?.classList.add("backdrop-blur-2xl")
        } else {
          backdrop?.classList.remove("bg-lime-900/30")
          backdrop?.classList.remove("backdrop-blur-2xl")
        }
      })
    }
  }

  function showActiveNavigationHighlight() {
    const header = document.getElementById("header")
    const activeNavigation: HTMLElement | null = header ? header.querySelector("a.active") : null
    const activeNavigationRect = activeNavigation?.getBoundingClientRect()
    const activeHighlight = document.getElementById("active-highlight")

    if (activeHighlight && activeNavigation) {
      activeHighlight.style.left = activeNavigation?.offsetLeft + "px"
      activeHighlight.style.bottom = activeNavigation?.offsetTop + "px"
      activeHighlight.style.width = activeNavigationRect?.width + "px"
      activeHighlight.style.height = activeNavigationRect?.height + "px"
    }
  }

  useEffect(() => {
    const links = document.querySelectorAll("#header a")

    if (links) {
      for (var i = 0; i < links.length; i++) {
        if (window.location.hash) {
          const route = links[i].getAttribute("href")
          if (route == window.location.hash) {
            links[i].classList.add("active")
          } else {
            links[i].classList.remove("active")
          }
        }
      }
    }

    showActiveNavigationHighlight()
  }, [params])

  useEffect(() => {
    showHeader()
    showActiveNavigationHighlight()
  }, [])

  return (
    <header
      id="header"
      className={`fixed inset-x-0 top-4 md:top-10 transition duration-300 flex justify-center ease-out -translate-y-96 z-20`}>
      <div className="absolute inset-0 z-20">
        <nav className="flex items-center justify-center">
          <ul className="rounded-full md:gap-4 font-gt flex items-center justify-center text-sm md:text-lg px-4 py-3 text-slate-200">
            <li>
              <Link href="#about" className="px-4 md:px-6 py-1 active">
                About
              </Link>
            </li>
            <li>
              <Link href="#work" className="px-4 md:px-6 py-1">
                Work
              </Link>
            </li>
            <li>
              <Link href="#contact" className="px-4 md:px-6 py-1">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="backdrop" className="transition-all duration-300 rounded-full z-10 mx-4"></div>
      <div
        id="active-highlight"
        className="absolute bg-white/20 rounded-full transition-all z-10"></div>
    </header>
  )
}
