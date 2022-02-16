import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout h1="Furniture Visualizer">
    <Seo title="Finch Furniture Visualizer" />
    <div className="content-wrapper">
      <p>You know you want <a href="https://finch.us.com/" target="_blank" rel="noreferrer">Finch™ outdoor furniture</a>, but in what colors?<br/>Use this visualizer to choose your colors.</p>
      <div className="visualizer-list">
        <Link to="/adirondack-chair/" className="visualizer-list-item">
          <span className="visualizer-list-image"><img src={data.adirondackImage.childImageSharp.resize.src} alt="Finch SeaAira Adirondack Chair" /></span>
          <span className="visualizer-list-text">
            <h2>Adirondack Chair</h2>
            <h3>2-tone poly visualizer</h3>
          </span>
        </Link>
        <Link to="/keystone-dining/" className="visualizer-list-item">
          <span className="visualizer-list-image"><img src={data.keystoneImage.childImageSharp.resize.src} alt="Finch Keystone Dining Set" /></span>
          <span className="visualizer-list-text">
            <h2>Keystone Dining Set</h2>
            <h3>2-tone poly visualizer</h3>
          </span>
        </Link>
        <Link to="/van-buren-chair/" className="visualizer-list-item">
          <span className="visualizer-list-image"><img src={data.vanBurenImage.childImageSharp.resize.src} alt="Finch Van Buren Chair" /></span>
          <span className="visualizer-list-text">
            <h2>Van Buren Chair</h2>
            <h3>Fabric & Poly visualizer</h3>
          </span>
        </Link>
        <Link to="/mission-double-glider/" className="visualizer-list-item">
          <span className="visualizer-list-image"><img src={data.missionDoubleGliderImage.childImageSharp.resize.src} alt="Mission Double Glider" /></span>
          <span className="visualizer-list-text">
            <h2>Mission Double Glider</h2>
            <h3>Fabric & Poly visualizer</h3>
          </span>
        </Link>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    adirondackImage: file(relativePath: {eq: "misc-furniture/finch-seaaira-adirondack-chair.png"}) {
      childImageSharp {
        resize {
          src
        }
      }
    }
    keystoneImage: file(relativePath: {eq: "misc-furniture/finch-keystone-dining-set.png"}) {
      childImageSharp {
        resize {
          src
        }
      }
    }
    vanBurenImage: file(relativePath: {eq: "misc-furniture/finch-van-buren-chair.png"}) {
      childImageSharp {
        resize {
          src
        }
      }
    }
    missionDoubleGliderImage: file(relativePath: {eq: "misc-furniture/finch-mission-double-glider.png"}) {
      childImageSharp {
        resize {
          src
        }
      }
    }
  }
`

export default IndexPage
