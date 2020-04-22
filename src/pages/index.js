import React, {useState} from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

// Assets
import Logo from "../components/nonStretchedLogo"

export const NavButtonStyle = styled.div`
  // background: "white";
  // font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  // border-radius: 3px;
`;

const IndexPage = ({location}) => {

const [state, toggle] = useState(true)
const { x } = useSpring({from: {x: 0}, x: state ? 1 : 0, config: { duration: 1000 }})

return (
  <Layout location={location} >
    <Logo/>
    <SEO title="Home" />
    <h1>Alcaraz Logistics Corporation</h1>
    <NavButtonStyle>
      <animated.div
            role="button" tabIndex={0} onClick={() => toggle(!location.pathname)} onKeyDown={() => toggle(!location.pathname)}
            style={{
              opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
              transform: x
                .interpolate({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                })
                .interpolate(x => `scale(${x})`)
            }}>
        <Link to="/about_us" >About US</Link>
        <br/>
        <Link to="/our_services" >Our Services</Link>
        <br/>
        <Link to="/work_with_us" >Work with us</Link>
      </animated.div>
    </NavButtonStyle>
  </Layout>

)
}

export default IndexPage
