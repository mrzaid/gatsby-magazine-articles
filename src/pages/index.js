import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql,StaticQuery} from 'gatsby'
import Post from '../components/Post'
import {Row,Col} from 'reactstrap'
import Sidebar from '../components/Sidebar'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
   <Row>
     <Col md='8'>
     <StaticQuery query={indexQuery} render={data=>{
      return(
        <div>
          {data.allMarkdownRemark.edges.map(({node}) => (
            <Post
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            author={node.frontmatter.author}
            body={node.excerpt}
            fluid={node.frontmatter.image.childImageSharp.fluid}
            path={node.frontmatter.path}
            tags={node.frontmatter.tags}
            />
          )
          )}
        </div>
      )
    }}/>
     </Col>
     <Col md='4'>
       <Sidebar/>
     </Col>
   </Row>
  </Layout>
)

const indexQuery = graphql`
query indexQuery{
  allMarkdownRemark{
    edges{
      node{
        id
        frontmatter{
          title
          date
          author
          city
          path
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 600,maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
       
      }
    }
  }
}
`
export default IndexPage
