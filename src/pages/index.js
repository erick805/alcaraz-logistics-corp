import React from "react"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import { useSpring, animated } from 'react-spring'

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Language from "../components/language"

// Assets
import Logo from "../components/nonStretchedLogo"

export const NavButtonStyle = styled.button`
  background: "white";
  display: inline-block;
  // font-size: 1em;
  // border-radius: 3px;
  border: 1px solid #5ce1e6;
  padding: 6px 8px;
  text-align: center;
  margin: 4px 2px;
  transition-duration: 0.4s;
  border-radius: 15px; 
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
`;

const IndexPage = ({location}) => {
  const intl = useIntl()
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  
  return (
    <Layout location={location}>
      <Language />
      <Logo/>
      <SEO 
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        />
      <h1>
        <FormattedMessage id="title" />
      </h1>
      <animated.div 
        style={props}
      >
        <NavButtonStyle className="nav-button">
          <Link to="/about_us" >
            <FormattedMessage id="about.title" />
          </Link>
        </NavButtonStyle>
      </animated.div>
      <animated.div 
        style={props}
      >
        <NavButtonStyle className="nav-button">
          <Link to="/our_services" >
            <FormattedMessage id="services.title" />
          </Link>
        </NavButtonStyle>
      </animated.div>
      <animated.div 
        style={props}
      >
        <NavButtonStyle className="nav-button">
          <Link to="/work_with_us" >
            <FormattedMessage id="Work with us" />
          </Link>
        </NavButtonStyle>
      </animated.div>
    </Layout>
  )
}

export default IndexPage
