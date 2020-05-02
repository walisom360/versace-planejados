import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {Grid} from './styles'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Differentials from "../components/Differentials"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "forniture"}, relativePath: {}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
  `)

return(
  <Layout>
    <Grid>
   {data.allFile.edges.map(({node})=>(
     <Img style={{marginTop:20}} fluid={node.childImageSharp.fluid} />
   ))}
   </Grid>
   <Differentials />
  </Layout>
)

}
export default IndexPage
