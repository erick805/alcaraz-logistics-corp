import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { DropdownButton, Dropdown } from "react-bootstrap"
import { useSpring, animated } from 'react-spring'

const languageName = {
  en: "English",
  es: "Espanol"
}

const Language = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  
  return (
    <animated.div
      style={props}
    >
      <DropdownButton
        title="Choose your language"
        // id="dropdown-variants-primary"
        style={{marginBottom: '3rem'}}
      >
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map(language => (
              <Dropdown.Item
                key={language}
                onClick={() => changeLocale(language)}
                style={{
                  color: currentLocale === language ? `#004aad` : `black`,
                  margin: 5,
                  cursor: `pointer`,
                }}
                value={language}
              >
                {languageName[language]}
              </Dropdown.Item>
            ))
          }
        </IntlContextConsumer>
      </DropdownButton>
    </animated.div>
  )
}

export default Language