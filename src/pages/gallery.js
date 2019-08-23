import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import InfiniteImages from "../components/InfiniteImages";

const Gallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <h1 className="is-size-3">图片来自 Unsplash</h1>
      <p style={{ marginBottom: "5%" }}>
        如今的丛林法则，就像古老而又真实的星空，是这样的，越续往下翻，你会看到越多的喵咪
        😹😹😹
      </p>
      <InfiniteImages />
    </Layout>
  );
};

export default Gallery;
