import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import logo from '../images/logo.png'


const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`;


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
    <div> 
      <img 
        style={{
          width: '100px',
        }}
        src={logo}
        alt="logo"
      />    
    </div>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
