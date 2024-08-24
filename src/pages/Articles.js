import React from "react";
import Article from "../components/Article";
import articlesData from "../data/articles.json";
import "./styles/Articles.css";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: articlesData,
      query: "",
    };

    // Bind handleChange method
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value.toLowerCase() });
  }

  render() {
    const { articles, query } = this.state;

    // Filter articles based on the search query
    const filteredArticles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query.replace(/<br\/>/g, " "))
    );

    return (
      <div className="Articles__list">
        <div className="Articles__container pt-5">
          <input
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={this.handleChange}
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
  }
}

export default Articles;
