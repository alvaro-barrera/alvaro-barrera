import React from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import "./styles/Articles.css";
import useArticles from "../hooks/useArticles";
import { Helmet } from "react-helmet";

const ArticleDetail = () => {
  const { slug } = useParams();
  const articlesData = useArticles(slug);
  const article = articlesData.length > 0 ? articlesData[0] : null;
  const jsonLD = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.summary,
        author: "Álvaro Barrera",
        datePublished: article.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": window.location.href,
        },
      }
    : {};
  return (
    <div className="Articles__list">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
      </Helmet>

      <div className="Articles__container pt-5">
        {article ? (
          <Article data={article} show_full={true} />
        ) : (
          <p>Artículo no encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
