import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

const Header = ({ h1 }) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(relativePath: {eq: "finch-logo.png"}) {
          childImageSharp {
            resize(width: 200) {
              src
            }
          }
        }
        adirondackIcon: file(relativePath: {eq: "misc-furniture/menu-icons/menu-adirondack-chair.png"}) {
          childImageSharp {
            resize {
              src
            }
          }
        }
        keystoneDiningIcon: file(relativePath: {eq: "misc-furniture/menu-icons/menu-keystone-dining-set.png"}) {
          childImageSharp {
            resize {
              src
            }
          }
        }

        vanburenChairIcon: file(relativePath: {eq: "misc-furniture/menu-icons/menu-van-buren-chair.png"}) {
          childImageSharp {
            resize {
              src
            }
          }
        }
        missionDoubleGliderIcon: file(relativePath: {eq: "misc-furniture/menu-icons/menu-mission-double-glider.png"}) {
          childImageSharp {
            resize {
              src
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <header>
          <div className="logo">
            <Link to="/"><img src={data.file.childImageSharp.resize.src} alt="Finch logo" /></Link>
          </div>
          <h1 className="header-in-title">{h1}</h1>
          {/* Menu Buttons */}
            <Link className="menu-icons" to="/adirondack-chair/" activeClassName="menu-icon-active"><img src={data.adirondackIcon.childImageSharp.resize.src} alt="Adirondack Chair" /></Link>
            <Link className="menu-icons" to="/keystone-dining/" activeClassName="menu-icon-active"><img src={data.keystoneDiningIcon.childImageSharp.resize.src} alt="Keystone Dining" /></Link>
            <Link className="menu-icons" to="/van-buren-chair/" activeClassName="menu-icon-active"><img src={data.vanburenChairIcon.childImageSharp.resize.src} alt="Van Buren Chair" /></Link>
            <Link className="menu-icons" to="/mission-double-glider/" activeClassName="menu-icon-active"><img src={data.missionDoubleGliderIcon.childImageSharp.resize.src} alt="Mission Double Glider" /></Link>

          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><title>See More Visualizers</title><path d="M8 19.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5zM8 11.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5zM18 19.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5zM8 3.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5zM18 11.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5zM28 19.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5zM18 3.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5zM28 11.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5zM28 3.5v3c0 0.8-0.7 1.5-1.5 1.5h-5c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h5c0.8 0 1.5 0.7 1.5 1.5z"/></svg>
            <span className="hide">see more visualizers</span>
          </Link>
        </header>
      </>
    )}
  />
)

export default Header
