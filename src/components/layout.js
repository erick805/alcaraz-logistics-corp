/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
// import { Spring } from 'react-spring/renderprops'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

// Components

// CSS
import "./layout.css"

const MainLayout = styled.main`
  font-family: 'Quicksand', sans-serif;
  max-width: 50%;
  margin: 1rem auto;
  display: grid;
  grid-template-rows: auto;
  margin-left: 7rem;
  margin-top: 3rem;
`
const Layout = ({ children, location }) => {

const [state, toggle] = useState(true)
const { x } = useSpring({from: {x: 0}, x: state ? 1 : 0, config: { duration: 1000 }})

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

    }
  `)


  return (
    <>
      <MainLayout>
        <div onClick={() => toggle(!location.pathname)}>
          <animated.div
          style={{
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}>
          {children}
          </animated.div>
        </div>
      </MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {
  location: {}
}

export default Layout
