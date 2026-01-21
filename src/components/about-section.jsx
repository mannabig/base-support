
export default function AboutSection() {
  const features = [
    {
      title: 'Expert Support',
      description: 'Our team of experienced crypto specialists is available 24/7 to assist you with any questions or issues.'
    },
    {
      title: 'Fast Transactions',
      description: 'We ensure your transactions are processed quickly and securely with minimal delays.'
    },
    {
      title: 'Secure & Trusted',
      description: 'Your funds and data are protected with industry-leading security protocols and encryption.'
    },
    {
      title: 'Clear Information',
      description: 'We provide transparent documentation and guides to help you understand every aspect of our service.'
    }
  ]

  return (
    <section className="w-full py-5 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl font-bold text-[#0052ff] mb-3 text-balance">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded p-2 bg-gray-50"
            >
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#0052ff] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xs font-semibold text-[#0a0b0d]">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
