import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FurnitureApp from "../components/FurnitureApp/FurnitureApp";

const IndexPage = ({data}) => (
  <Layout h1="Keystone Dining Set">
    <SEO title="Home" />
    <FurnitureApp data={data.allGoogleSpreadsheetKeystoneDiningSet.edges} 
    images={data.allFurniture.edges}
    />    
  </Layout>
)

export const query = graphql`
  query {
    allGoogleSpreadsheetKeystoneDiningSet {
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
    allFurniture: allFile(filter: {dir: {eq: "/Users/adriannolt/Sites/visualizer/src/images/keystone-dining"}}) {
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
  }
`

export default IndexPage
