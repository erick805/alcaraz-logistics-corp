/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import { Spring } from 'react-spring/renderprops'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

// Components
import Header from "./header"
import Archive from "./archive"

// CSS
import "./layout.css"


const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`
const Layout = ({ children, location }) => {
  console.log("here is your location path name:", location.pathname)
  console.log("location:", location)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {
    eq: "gatsby-astronaut.png"
    }) {
      size
      childImageSharp {
        fluid(maxWidth: 1000) {
          src
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
         from={{height: location.pathname === '/' ? 100 : 200 }}
         to={{height: location.pathname === '/' ? 200 : 100 }}
      >
        {styles => (
          <div style={{overflow: 'hidden', ...styles}}>
            <Img fluid={data.file.childImageSharp.fluid} />  
          </div>
        )}
      </Spring>
      <MainLayout>
        <div>
         {children}
        </div>
        <Archive />
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
