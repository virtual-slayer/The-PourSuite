'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`} style={{ backgroundColor: '#FDFAF5' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded border flex items-center justify-center overflow-hidden"
              style={{ borderColor: '#D4AF5A', backgroundColor: '#fff' }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="10" r="7" stroke="#6B1A2A" strokeWidth="1.2" fill="none"/>
                <path d="M18 17 L18 28" stroke="#6B1A2A" strokeWidth="1.2"/>
                <path d="M13 28 L23 28" stroke="#6B1A2A" strokeWidth="1.2"/>
                <path d="M11 6 Q8 14 12 18" stroke="#6B1A2A" strokeWidth="0.8" fill="none"/>
                <circle cx="9" cy="5" r="1.5" fill="#6B1A2A"/>
                <circle cx="11" cy="8" r="1" fill="#6B1A2A"/>
                <circle cx="9" cy="11" r="1.2" fill="#6B1A2A"/>
              </svg>
            </div>
            <span className="text-2xl font-display" style={{ color: '#1C1C1C' }}>
              The<span style={{ color: '#B8962E' }}>PourSuite</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {['EXPERIENCES', 'REGIONS', 'ABOUT US', 'STORIES & REVIEWS'].map((link) => (
              
                key={link}
                href="#"
                className="text-xs font-sans tracking-widest transition-colors duration-200 hover:opacity-60"
                style={{ color: '#1C1C1C', letterSpacing: '0.15em' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating BOOK NOW — top right */}
      <div className="fixed top-5 right-0 z-50">
        <button
          className="px-6 py-4 text-xs font-sans font-semibold tracking-widest transition-opacity duration-200 hover:opacity-80"
          style={{
            backgroundColor: '#B8962E',
            color: '#fff',
            letterSpacing: '0.15em',
          }}
        >
          BOOK NOW
        </button>
      </div>

      {/* Floating CALL NOW — bottom right */}
      <div className="fixed bottom-5 right-0 z-50">
        <button
          className="px-6 py-4 text-xs font-sans font-semibold tracking-widest transition-opacity duration-200 hover:opacity-80"
          style={{
            backgroundColor: '#1C1C1C',
            color: '#fff',
            letterSpacing: '0.15em',
          }}
        >
          CALL NOW
        </button>
      </div>
    </>
  )
}
