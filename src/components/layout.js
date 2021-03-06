/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

// Components
// import Header from './header'

// CSS
import "./layout.css"

const MainLayoutStyle = styled.main`
  font-family: 'Quicksand', sans-serif;
  max-width: 70%;
  margin: 1rem auto;
  display: grid;
  margin-left: 2.5rem;
  margin-top: 2rem;
`
const Layout = ({ children, location}) => {

  return (
    <>
      <MainLayoutStyle>
        {/* <Header /> */}
        <main location={location} >
          {children}
        </main>
      </MainLayoutStyle>
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
