import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  es: "Espanol"
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <option
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `yellow` : `white`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
              value={language}
            >
              {languageName[language]}
            </option>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language