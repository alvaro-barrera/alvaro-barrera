import React from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import articlesData from "../data/articles.json";
import "./styles/Articles.css";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articlesData.find((article) => article.slug === slug);

  return (
    <div className="Articles__list">
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
