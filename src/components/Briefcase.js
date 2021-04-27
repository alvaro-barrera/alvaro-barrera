import React from "react";
import SectionTitle from "./SectionTitle";
import "./styles/BriefcaseItem.css";

class BriefcaseItem extends React.Component {
  handlePopupImage = (url) => {
    console.log(url);
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
      <div className="Briefcase__column">
        <div className="content card BriefcaseItem">
          <img className="card-img-top" src={this.props.project.image} alt="" />
          <h4 className="Title__Anton">{this.props.project.name}</h4>
          <div className="BriefcaseItem__badges-container">
            {this.props.project.techs.map((tech,index) => {
              return (
                <React.Fragment key={index}>
                  <span className="badge badge-pill badge-success BadgesListItem__tag-title ml-1 mr-1">
                    {tech}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

class Briefcase extends React.Component {
  render() {
    return (
      <div className="pb-3 pt-3">
        <SectionTitle title={this.props.title}></SectionTitle>
        <div className="Briefcase__row">
          {this.props.projects.map((project) => {
            return (
              <React.Fragment key={project.id}>
                <BriefcaseItem project={project}></BriefcaseItem>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Briefcase;
