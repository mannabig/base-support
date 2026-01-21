import React, { useState, useEffect } from 'react'

export default function TestimonialsPopup() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Crypto Trader',
      text: 'Excellent support team! They helped me resolve my wallet issue in minutes.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      text: 'Best crypto help center I\'ve used. Fast, reliable, and professional service.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Blockchain Developer',
      text: 'The documentation is clear and the support team is incredibly knowledgeable.',
      rating: 5
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Investment Manager',
      text: 'Highly recommended! They solved my transaction problem within 24 hours.',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Crypto Investor',
      text: 'Outstanding customer service. Very responsive and helpful team members.',
      rating: 5
    },
    {
      id: 6,
      name: 'David Martinez',
      role: 'Tech Enthusiast',
      text: 'Secure, trustworthy, and easy to use. This is exactly what I needed.',
      rating: 5
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!isVisible) return null

  const current = testimonials[currentIndex]

  return (
    <div className="fixed left-3 bottom-3 z-40 w-64">
      <div className="bg-white rounded shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-[#0052ff] to-[#003d99] px-3 py-2 text-white flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-xs">Reviews</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close testimonials"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Stars */}
          <div className="flex gap-0.5 mb-2">
            {[...Array(current.rating)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-xs mb-2 italic line-clamp-3">
            &ldquo;{current.text}&rdquo;
          </p>

          {/* Author */}
          <div className="mb-2">
            <p className="font-semibold text-[#0a0b0d] text-xs">
              {current.name}
            </p>
            <p className="text-gray-500 text-xs">
              {current.role}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <button
                onClick={handlePrev}
                className="p-1 rounded hover:bg-gray-100 transition-colors text-[#0052ff]"
                aria-label="Previous testimonial"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-1 rounded hover:bg-gray-100 transition-colors text-[#0052ff]"
                aria-label="Next testimonial"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Counter */}
            <span className="text-xs text-gray-500 font-medium">
              {currentIndex + 1}/{testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
