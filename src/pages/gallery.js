import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import InfiniteImages from "../components/InfiniteImages";

const Gallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <h1 className="is-size-5" style={{ marginBottom: "1.0875rem" }}>
        如今的丛林法则，就像古老而又真实的天空，是这样的，越往下翻，你就会看到越多猫咪😹😹😹
      </h1>
      <InfiniteImages />
    </Layout>
  );
};

export default Gallery;
