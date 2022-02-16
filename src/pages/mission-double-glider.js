import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FurnitureApp from "../components/FurnitureApp/FurnitureApp";

const IndexPage = ({data}) => {
  return (
  <Layout h1="Mission Double Glider">
    <Seo title="Mission Double Glider" />
    <FurnitureApp data={data.allGoogleSpreadsheetMissionDoubleGlider.edges} 
    swatches={data.allSwatches.edges}
    images={data.allFurniture.edges}
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
