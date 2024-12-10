import React from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import "./styles/Articles.css";
import useArticles from "../hooks/useArticles";

const ArticleDetail = () => {
  const { slug } = useParams();
  const articlesData = useArticles(slug);
  const article = articlesData.length > 0 ? articlesData[0] : null;

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
