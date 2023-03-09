import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FurnitureApp from "../components/FurnitureApp/FurnitureApp";

const title="Adirondack Chair" 
const IndexPage = ({data}) => (
  <Layout h1={title}>
    <Seo title={title} />
    <FurnitureApp data={data.allGoogleSpreadsheetAdirondackChair.edges} 
    images={data.allFurniture.edges}
    logo={data.logo.childImageSharp.resize.src}
    title={title}
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
    logo: file(relativePath: {eq: "finch-logo.png"}) {
      childImageSharp {
        resize(width: 60) {
          src
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
