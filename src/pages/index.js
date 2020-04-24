import React from "react"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
// import {useSpring, animated} from 'react-spring'

// Assets
import Logo from "../components/nonStretchedLogo"

export const NavButtonStyle = styled.div`
  background: "white";
  display: grid;  
  // font-size: 1em;
  // border-radius: 3px;
  border: 1px solid #5ce1e6;
  padding: 16px 32px;
  text-align: center;
  margin: 4px 2px;
  transition-duration: 0.4s;
  border-radius: 15px; 
`;

const IndexPage = ({location}) => {
  const intl = useIntl()
  return (
    <Layout location={location} >
      <Logo/>
      <SEO 
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        />
      <h1>
        <FormattedMessage id="title" />
      </h1>
      <NavButtonStyle className="nav-button">
        <Link to="/about_us" >
          <FormattedMessage id="About us" />
        </Link>
      </NavButtonStyle>
      <NavButtonStyle className="nav-button">
          <Link to="/our_services" >
            <FormattedMessage id="Our services" />
          </Link>
      </NavButtonStyle>
      <NavButtonStyle className="nav-button">
          <Link to="/work_with_us" >
            <FormattedMessage id="Work with us" />
          </Link>
      </NavButtonStyle>
    </Layout>
  )
}

export default IndexPage
