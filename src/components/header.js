import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.svg"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"Ferdi"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                <div className={"menu-links"}>
                    <Link to="/services">Services</Link>
                    <Link to="/features">Features</Link>
                    <a href="https://help.getferdi.com">Help Center</a>
                </div>

                <div className={"get-started"}>
                    <Link to="/download">Download</Link>
                </div>
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
