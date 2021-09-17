import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Col from "react-bootstrap/esm/Col";
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Header from '../components/Header';
import bg from "../../static/bg.webp";
import bgvideo from "../../static/bg.mp4";
import NextNews from "../components/NextNews";
import ShareSocial from "../components/ShareSocial";

export const BlogPostTemplate = ({
  postIndex,
  content,
  contentComponent,
  tags,
  title,
  date,
  helmet,
  slug
}) => {
  const PostContent = contentComponent || Content;
  
  const buildContent = () => {
    let newContent = content.replace(/<p><strong>/g, "<h4>");
    newContent = newContent.replace(/<\/strong><\/p>/g, "</h4>");

    return newContent;
  }

  return (
    <section className="section-blogpost">
      {helmet || ''}
        <Col sm={12} md={12} lg={8} className="post" >
          {tags && tags.length ? (
            <div className="tags">
              {tags.map((tag) => (
                <a target="_blank" className="tagbox">
                  {tag}
                </a>
              ))}
            </div>
          ) : null}
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <h6 className="post-date">{date}</h6>
          <PostContent content={buildContent()} />
          <ShareSocial title={title}  shareSlug={slug} tags={tags} />
        </Col>
        <NextNews postIndex={postIndex} />         
    </section>
  )
}

BlogPostTemplate.propTypes = {
  postIndex: PropTypes.number,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  slug: PropTypes.string
}

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <video
        playsInline
        autoPlay
        loop
        muted
        poster={bg}
        className="video"
        id="bgvid"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      <header id="home" className="section-main">
        <Header blogPost={true} />
      </header>
      <BlogPostTemplate
        postIndex={pageContext.index}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        slug={post.fields.slug}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`