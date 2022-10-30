import React from "react";
import SectionTitle from "./SectionTitle";
import "./styles/BriefcaseItem.css";

class BriefcaseItem extends React.Component {
  handlePopupImage = (url) => {
    window.open(
      url,
      "Nombre de la ventana",
      "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50"
    );
  };
  handleMoreInfo = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div className="BriefcaseItem__card border">
        <div className="BriefcaseItem__card-image">
          <img
            className="BriefcaseItem__image"
            src={this.props.project.image}
            alt=""
          />
        </div>
        <div className="BriefcaseItem__card-overlay">
          <div className="BriefcaseItem__card-header">
            <div className="BriefcaseItem__card-header-text">
              <h3 className="Title__Anton">
                {this.props.project.name}
                {this.props.project.demo && (
                  <a
                    href={this.props.project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo{" "}
                  </a>
                )}
              </h3>
            </div>
          </div>
          <div className="BriefcaseItem__card-description">
            <div className="BriefcaseItem__badges-container">
              <ul>
                {this.props.project.detailLists.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className="BriefcaseItem_li">
                        {" "}
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span className="BriefcaseItem__description-span">
                          {item}
                        </span>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Briefcase extends React.Component {
  render() {
    return (
      <div className="pb-3 pt-5 separation">
        <SectionTitle title={this.props.title}></SectionTitle>
        <div className="Briefcase__row">
          <div className="Briefcase__cards">
            {this.props.projects.map((project) => {
              return (
                <React.Fragment key={project.id}>
                  <BriefcaseItem project={project}></BriefcaseItem>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Briefcase;
