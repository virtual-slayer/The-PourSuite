'use client'

import { useState } from 'react'

const regions = [
  'All Regions',
  'Napa Valley',
  'Sonoma Valley',
  'Temecula Valley',
  'Santa Barbara',
]

export default function Hero() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-8 md:px-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 75% 50%, #7B3020 0%, #5C1520 35%, #3D0D15 70%, #2A0810 100%)',
      }}
    >
      {/* Subtle warm glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(160, 80, 30, 0.35) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">

        {/* Eyebrow */}
        <p
          className="text-xs font-sans font-medium mb-6"
          style={{
            color: '#B8962E',
            letterSpacing: '0.2em',
          }}
        >
          DISCOVER &amp; BOOK UNFORGETTABLE WINERY EXPERIENCES ACROSS AMERICA
        </p>

        {/* H1 */}
        <h1
          className="font-display font-light leading-none mb-8"
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(56px, 8vw, 96px)',
            lineHeight: '1.0',
          }}
        >
          The Art of the<br />Perfect Pour
        </h1>

        {/* Subtext */}
        <p
          className="font-sans font-light leading-relaxed mb-12 max-w-lg"
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: '15px',
            lineHeight: '1.75',
          }}
        >
          Curated access to America&apos;s most celebrated wine estates.<br />
          We take you beyond the tasting room — from Napa to the Finger Lakes
        </p>

        {/* Search Widget */}
        <div
          className="rounded-sm p-5 max-w-xl"
          style={{ backgroundColor: 'rgba(253, 250, 245, 0.97)' }}
        >
          <p
            className="text-xs font-sans font-semibold mb-3"
            style={{ color: '#555', letterSpacing: '0.12em' }}
          >
            REGION
          </p>

          {/* Region Dropdown */}
          <div className="relative mb-4">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-left transition-all duration-200"
              style={{
                backgroundColor: '#F9F5EF',
                border: '1px solid #E8E0D5',
                color: '#1C1C1C',
                fontSize: '14px',
              }}
            >
              {/* Pin icon */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C5.07 1 3.5 2.57 3.5 4.5C3.5 7.25 7 13 7 13C7 13 10.5 7.25 10.5 4.5C10.5 2.57 8.93 1 7 1Z"
                  stroke="#B8962E" strokeWidth="1.2" fill="none"/>
                <circle cx="7" cy="4.5" r="1.2" fill="#B8962E"/>
              </svg>
              <span className="flex-1 font-sans" style={{ color: '#1C1C1C' }}>
                {selectedRegion}
              </span>
              <svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 1L5 5L9 1" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Dropdown Options */}
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 z-20 rounded-sm shadow-lg mt-1"
                style={{ backgroundColor: '#FDFAF5', border: '1px solid #E8E0D5' }}
              >
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => { setSelectedRegion(region); setDropdownOpen(false) }}
                    className="w-full text-left px-4 py-3 text-sm font-sans transition-colors duration-150 hover:bg-cream"
                    style={{
                      color: region === selectedRegion ? '#B8962E' : '#1C1C1C',
                      backgroundColor: region === selectedRegion ? '#F0EAE0' : 'transparent',
                      fontSize: '13px',
                    }}
                  >
                    {region}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reserve Button */}
          <button
            className="w-full py-4 text-xs font-sans font-semibold tracking-widest transition-opacity duration-200 hover:opacity-85"
            style={{
              backgroundColor: '#B8962E',
              color: '#FFFFFF',
              letterSpacing: '0.18em',
            }}
          >
            RESERVE YOUR EXPERIENCE
          </button>
        </div>
      </div>
    </section>
  )
}
