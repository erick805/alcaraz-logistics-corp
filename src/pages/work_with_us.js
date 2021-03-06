import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// CSS
import { NavButtonStyle } from "./index"

const work_with_us = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "Work with us" })} />
    <h3>
      <FormattedMessage id="Work with us" />
    </h3>
    <form 
      name="work_with_us" 
      method="post" 
      action= "thanks/"
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="work_with_us" />
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Company Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Industry: <select name="role[]" multiple>
          <option value="apparel">apparel</option>
          <option value="automotive">automotive</option>
          <option value="dry-goods">dry-goods</option>
          <option value="electronics">electronics</option>
          <option value="essentials">essentials</option>
          <option value="food-products">food-products</option>
          <option value="health-wellness">health-wellness</option>
          <option value="office-supplies">office-supplies</option>
          <option value="sports-athletics">sports-athletics</option>
        </select></label>
      </p>
      <p>
        <label>Our Service: <select name="role[]" multiple>
          <option value="research">research</option>
          <option value="deliver-port-home-country">deliver-port-home-country</option>
          <option value="deliver-port-destination-country">deliver-port-destination-country</option>
          <option value="deliver-port-destination-country+customs">deliver-port-destination-country+customs</option>
          <option value="door-to-door">door-to-door</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <NavButtonStyle>
      <Link to="/">
        <FormattedMessage id="Go back to the homepage" />
      </Link>
    </NavButtonStyle>
  </Layout>
)

export default injectIntl(work_with_us)
