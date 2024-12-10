import { useState, useEffect } from "react";

const useArticles = (query) => {
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const articlesData = importAll(
      require.context("../data/articles", false, /\.json$/)
    );

    const allArticles = articlesData.flat();

    const filtered = allArticles.filter(
      (article) =>
        article.slug.toLowerCase().includes(query.toLowerCase()) ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.summary.toLowerCase().includes(query.toLowerCase()) ||
        article.content
          .toLowerCase()
          .includes(query.replace(/<br\/>/g, " ").toLowerCase())
    );

    setFilteredArticles(filtered);
  }, [query]);

  return filteredArticles;
};

export default useArticles;
