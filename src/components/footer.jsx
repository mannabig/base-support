import React, { useEffect } from 'react'

export default function Footer() {
  useEffect(() => {
    // Load Google Translate script
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it,pt,ru,ja,zh-CN,zh-TW,ko,ar,hi,nl,tr',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      )
    }

    // Load the script if not already loaded
    if (!window.google) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.head.appendChild(script)
    } else {
      window.googleTranslateElementInit()
    }
  }, [])

  return (
    <footer className="w-full bg-[#0052ff] text-white py-3 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Google Translate and Contact in one row */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center text-xs">
          {/* Google Translate */}
          <div id="google_translate_element" className='ct-header-translator'></div>

          {/* Contact Links */}
          <div className="flex gap-3">
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white/80 transition-opacity"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.149c-1.488.549-2.862 1.453-3.954 2.547-1.092 1.093-1.998 2.467-2.547 3.955a9.9 9.9 0 00-.5 2.379 9.864 9.864 0 00.358 3.066 10.025 10.025 0 001.19 2.762c.714 1.095 1.613 2.06 2.65 2.815 1.037.756 2.2 1.311 3.435 1.626 1.235.315 2.54.364 3.814.148 1.275-.216 2.486-.687 3.534-1.384 1.048-.697 1.939-1.588 2.621-2.616.682-1.028 1.168-2.175 1.433-3.376.265-1.202.301-2.457.107-3.674-.195-1.216-.655-2.367-1.333-3.382a10.02 10.02 0 00-2.415-2.625c-1.028-.713-2.176-.999-3.44-.999z" />
              </svg>
              WhatsApp
            </a>

            <a 
              href="mailto:baseformerlys@gmail.com"
              className="flex items-center gap-1 hover:text-white/80 transition-opacity"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-white/70 mt-2">
          © 2025 Crypto Help Centre | All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
