import React from 'react'
import {Link} from 'gatsby'
import {Badge, Card,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody} from 'reactstrap'
import Img from 'gatsby-image'
import {slugify} from '../util/utilityFunctions'

 const Post = ({title,date,author,city,path,body,fluid,tags}) => {
    return (
      <Card>
          <Link to={path}>
          <Img className="card-image-top" fluid={fluid} />
          </Link>
          <CardBody>
              <CardTitle>
                  {title}
              </CardTitle>
              <CardSubtitle>
    <span className="text info">{date}</span> 
    <span className="text info"> {author}</span>
    <span className="text info">{city}</span>
              </CardSubtitle>
              <CardText>
                  {body}
              </CardText>
              <ul className="post-tags">
                  {tags.map(tag=>(
                      <li>
                          <Link to={`/tag/${slugify(tag)}`}>
                          <Badge color="primary" className="text-uppercase">
                          {tag}
                          </Badge>
                          </Link>
                      </li>
                  ))}
              </ul>
            <Link to={path} 
            className="btn btn-outline-primary float-right">
                Read more
            </Link>
          </CardBody>
      </Card>
    )
}
export default Post