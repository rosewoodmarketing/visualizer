import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FurnitureApp from "../components/FurnitureApp/FurnitureApp";

const IndexPage = ({data}) => (
  <Layout h1="Keystone Dining Set">
    <Seo title="Keystone Dining Set" />
    <FurnitureApp data={data.allGoogleSpreadsheetKeystoneDiningSet.edges} 
    images={data.allFurniture.edges}
    logo={data.logo.childImageSharp.resize.src}
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
    logo: file(relativePath: {eq: "finch-logo.png"}) {
      childImageSharp {
        resize(width: 60) {
          src
        }
      }
    }
  allFurniture: allFile(filter: {relativeDirectory: {eq: "keystone-dining"}}) {
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
