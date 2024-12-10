import React from "react";
import "./styles/Article.css";
import { Link } from "react-router-dom";

const ArticlePaginator = ({ data }) => {
  return (
    <div>
      <Link to={`/articles`}>Ver todos</Link>{" "}
      {data.previous && (
        <Link to={`/articles/${data.previous}`}>Leer Anterior</Link>
      )}
      {data.previous && data.next && " "}
      {data.next && <Link to={`/articles/${data.next}`}>Leer Siguiente</Link>}
    </div>
  );
};
const Article = ({ data, show_full = false }) => {
  const renderContent = (content) => {
    return { __html: content };
  };

  return (
    <div className="article article-content jumbotron text-justify border bg-white pt-0 pb-2">
      {show_full && (
        <div className="article-footer article-border-bottom">
          <ArticlePaginator data={data} />
        </div>
      )}

      <header className="article-headerseparation">
        <h2 className="Title__Anton">{data.title}</h2>
        {show_full && (
          <p className="article-meta">
            Publicado el {data.date} | Autor:{" "}
            <a
              className="font-weight-bold"
              href="https://www.linkedin.com/in/alvaro-barrera/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              Álvaro Barrera
            </a>{" "}
          </p>
        )}
      </header>

      <div className="article-summary mb-4">
        <p>{data.summary}</p>
      </div>
      {!show_full ? (
        <>
          <Link to={`/articles/${data.slug}`}>Ver contenido completo</Link>
        </>
      ) : (
        <>
          <div
            className="article-body"
            dangerouslySetInnerHTML={renderContent(data.content)}
          />
          <footer className="article-footer article-border-top mt-3">
            <ArticlePaginator data={data} />
          </footer>
        </>
      )}
    </div>
  );
};

export default Article;
