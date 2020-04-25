import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { DropdownButton, Dropdown } from "react-bootstrap"
import { useSpring, animated } from 'react-spring'

const languageName = {
  en: "English",
  es: "Espanol"
}

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(${s})`

const Language = () => {
  const [props, set] = useSpring(() => ({ xys: [1, 1, 1], config: { mass: 5, tension: 300, friction: 40 } }))
  return (
    <animated.div
      onMouseMove={({ clientX: y, clientY: x }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 1, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
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
                  color: currentLocale === language ? `#5ce1e6` : `black`,
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