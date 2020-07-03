import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FurnitureApp from "../components/FurnitureApp/FurnitureApp";

const IndexPage = ({data}) => (
  <Layout h1="Adirondack Chair">
    <SEO title="Adirondack Chair" />
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
    allFurniture: allFile(filter: {dir: {eq: "/Users/adriannolt/Sites/visualizer/src/images/adirondack"}}) {
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
