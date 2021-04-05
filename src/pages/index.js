import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { graphql, StaticQuery } from "gatsby";

const IndexPage = () => (
  <Layout>
{/* //querying wordpress page object with graphql */}
    <StaticQuery
      query={graphql`
        {
          allWordpressPage {
            edges {
              node {
                id
                title
                content
              }
            }
          }
        }
      `}
      //above was mapped to the props below. allWordpress page returns an array which is mapped 
      //to the edges property after query completes array of edges
      render={query => ( query.allWordpressPage.edges.map((page) => (
        <div key={page.node.id}>
          <h1>{page.node.title}</h1>
          <div dangerouslySetInnerHTML={{__html: page.node.content}} />
        </div>
      )))}
    />

  </Layout>
);

export default IndexPage;
