import PropTypes from "prop-types"
import React from "react"

// Components
import styled from 'styled-components'

// Assets


const HeaderWrapper = styled.div`
  background: #524763;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;
`;


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
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
