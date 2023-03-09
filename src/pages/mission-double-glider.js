import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FurnitureApp from "../components/FurnitureApp/FurnitureApp";

const title="Mission Double Glider"
const IndexPage = ({data}) => {
  return (
  <Layout h1={title}>
    <Seo title={title} />
    <FurnitureApp data={data.allGoogleSpreadsheetMissionDoubleGlider.edges} 
    swatches={data.allSwatches.edges}
    images={data.allFurniture.edges}
    logo={data.logo.childImageSharp.resize.src}
    title={title} 
    />
    
  </Layout>
)}

export const query = graphql`
  query {
    allGoogleSpreadsheetMissionDoubleGlider {
      edges {
        node {
          color
          colorValue
          image
          group
          subgroup
          id
        }
      }
    }
    allFurniture: allFile(filter: {relativeDirectory: {eq: "mission-double-glider"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
                id
                resize(width: 800) {
                  src
                }
              }
            dir
          }
        }
      }
      logo: file(relativePath: {eq: "finch-logo.png"}) {
        childImageSharp {
          resize(width: 60) {
            src
          }
        }
      }
      allSwatches: allFile(filter: {relativeDirectory: {eq: "fabric-swatches"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
                id
                resize(width: 40, height: 40) {
                  src
                }
              }
            dir
          }
        }
      }
  }
`

export default IndexPage
