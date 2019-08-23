import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "bulma/css/bulma.min.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">欢迎光临！...喵的世界😹</h1>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery" className="has-text-white">
          OK 👌
        </Link>
      </button>
    </div>
  </Layout>
);

export default IndexPage;
