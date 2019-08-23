import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "bulma/css/bulma.min.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">欢迎光临！。。。喵的世界😹</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        一起来见证吧！一大波性感热辣的喵咪即将...前赴后继...~~~源源不断~~~~地涌来🌊🌊🌊
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery" className="has-text-white">
          燃！🔥
        </Link>
      </button>
    </div>
  </Layout>
);

export default IndexPage;
