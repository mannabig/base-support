import React, { useEffect } from "react";

function googleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,es,",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <div id="google_translate_element" className="ct-header-translator"></div>
  );
}

export default googleTranslate;
