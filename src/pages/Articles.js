import React, { useState } from "react";
import Article from "../components/Article";
import "./styles/Articles.css";
import useArticles from "../hooks/useArticles";

const Articles = () => {
  const [query, setQuery] = useState("");
  const filteredArticles = useArticles(query);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="Articles__list">
      <div className="Articles__container pt-5">
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={handleChange}
          className="search-input mb-3"
        />

        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, i) => (
            <Article key={i} data={article} show_full={false} />
          ))
        ) : (
          <p>No hay artículos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
