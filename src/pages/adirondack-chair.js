import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FurnitureApp from "../components/FurnitureApp/FurnitureApp";

const IndexPage = ({data}) => (
  <Layout h1="Adirondack Chair">
    <Seo title="Adirondack Chair" />
    <FurnitureApp data={data.allGoogleSpreadsheetAdirondackChair.edges} 
    images={data.allFurniture.edges}
    />    
  </Layout>
)

export const query = graphql`
  query {
    allGoogleSpreadsheetAdirondackChair {
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
    allFurniture: allFile(filter: {relativeDirectory: {eq: "adirondack"}}) {
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
