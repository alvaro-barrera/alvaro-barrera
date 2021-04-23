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
            {this.props.project.techs.map((tech) => {
              return (
                <span className="badge badge-pill badge-success BadgesListItem__tag-title ml-1 mr-1">
                  {tech}
                </span>
              );
            })}
          </div>
          {/* <p className="btn btn-primary">Ver detalle</p> */}
        </div>
      </div>

      // <div className="card text-center BriefcaseItem">
      //   {/* <div className="card-header pb-0 d-flex justify-content-center text-white BadgesListItem__tag-title">
      //     <h4 className="card-title text-center">{this.props.project.name}</h4>
      //   </div> */}
      //   <img className="card-img-top" src={this.props.project.image} alt="" />
      //   <div className="card-body BriefcaseItem___container">
      //     {/* <div className="card-header"> */}
      //     {/* </div> */}
      //     <div className="BriefcaseItem__image_container">
      //       <ul className="text-justify pl-3">
      //         {this.props.project.detailLists.map((detail) => {
      //           return <li>{detail}</li>;
      //         })}
      //       </ul>
      //     </div>
      //   </div>
      //   <div className="card-footer text-justify">
      //     {/* <small className="lead">{this.props.project.footer}</small> */}
      //   </div>
      // </div>
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

      // {/* // <div className="card-deck pb-3 mb-3"> */}
      // {/* //   {this.props.projects.map((project) => { */}
      // {/* //     return (
      //       <React.Fragment key={project.id}>
      //         <BriefcaseItem project={project}></BriefcaseItem>
      //       </React.Fragment>
      //     );
      //   })}
      // </div> */}
    );
  }
}

export default Briefcase;
