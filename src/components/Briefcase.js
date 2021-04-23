import React from "react";
import "./styles/BriefcaseItem.css";

class BriefcaseItem extends React.Component {
  render() {
    return (
      <div className="card text-center BriefcaseItem">
        <div className="card-header pb-0 d-flex justify-content-center">
          <h4 className="card-title text-center">{this.props.project.name}</h4>
        </div>

        <div className="card-body BriefcaseItem___container">
          {/* <div className="card-header"> */}
          {/* </div> */}
          <div className="BriefcaseItem__image_container">
            <img
              className=" card-img-top"
              src={this.props.project.image}
              alt=""
            />
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted lead">{this.props.project.footer}</small>
        </div>
      </div>
    );
  }
}

class Briefcase extends React.Component {
  render() {
    return (
      <div className="card-deck pb-3 mb-3">
        {this.props.projects.map((project) => {
          return (
            <React.Fragment key={project.id}>
              <BriefcaseItem project={project}></BriefcaseItem>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Briefcase;
