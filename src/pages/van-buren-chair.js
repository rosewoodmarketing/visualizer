import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FurnitureApp from "../components/FurnitureApp/FurnitureApp";

const IndexPage = ({data}) => {
  return (
  <Layout h1="Van Buren Chair">
    <SEO title="Van Buren Chair" />
    <FurnitureApp data={data.allGoogleSpreadsheetVanBurenChair.edges} 
    swatches={data.allSwatches.edges}
    images={data.allFurniture.edges}
    />
    
  </Layout>
)}

export const query = graphql`
  query {
    allGoogleSpreadsheetVanBurenChair {
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
    allFurniture: allFile(filter: {relativeDirectory: {eq: "van-buren-chair"}}) {
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
