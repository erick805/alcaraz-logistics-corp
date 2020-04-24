import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `white`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          // float: `right`,
        }}
      >
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header