import React, { useState } from 'react'

export default function FAQSection() {
  const [openId, setOpenId] = useState(null)

  const faqs = [
    {
      id: '1',
      question: 'How to pay network fee?',
      answer: 'Follow the instructions given to you to withdraw your funds to your bank account or wallet.'
    },
    {
      id: '2',
      question: 'How long does a transaction take?',
      answer: 'Most transactions process within 5 minutes after confirmation.'
    },
    {
      id: '3',
      question: 'How to contact support?',
      answer: 'Use WhatsApp, email, or our contact buttons above. Available 24/7.'
    }
  ]

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="w-full py-6 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-[#0052ff] mb-4 text-balance">
          FAQs
        </h2>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-3 py-2 flex items-center justify-between text-left hover:text-[#0052ff] transition-colors duration-300"
              >
                <h3 className="text-xs font-semibold text-[#0a0b0d]">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {openId === faq.id && (
                <div className="px-3 pb-2 text-gray-600 text-xs leading-relaxed border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
