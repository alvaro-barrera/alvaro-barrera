import React from "react";
import Article from "../components/Article";
import articlesData from "../data/articles.json";
import "./styles/Articles.css";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: articlesData,
    };
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="Articles__list">
        <div className="Articles__container pt-5">
          {articles.length > 0 ? (
            articles.map((article, i) => (
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
