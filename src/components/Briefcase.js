import React from "react";
import SectionTitle from "./SectionTitle";
import "./styles/BriefcaseItem.css";
import Modal from "./Modal";

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
        <div
          className="BriefcaseItem__card-image"
          onClick={this.props.handleOpenModal}
        >
          <img
            className="BriefcaseItem__image"
            src={this.props.project.image}
            alt=""
          />
        </div>
        <div className="BriefcaseItem__card-overlay">
          <div className="BriefcaseItem__card-header">
            <div className="BriefcaseItem__card-header-text">
              <h3 className="Title__Anton" onClick={this.props.handleOpenModal}>
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
        </div>
      </div>
    );
  }
}

class Briefcase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      project: null,
    };
  }

  handleOpenModal = (project) => {
    this.setState({ modalIsOpen: true, project: project });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false, project: null });
  };

  render() {
    return (
      <div className="pb-3 pt-4 separation">
        <SectionTitle title={this.props.title}></SectionTitle>
        <div className="Briefcase__row">
          <div className="Briefcase__cards">
            {this.props.projects.map((project, i) => {
              return (
                <React.Fragment key={i}>
                  <BriefcaseItem
                    project={project}
                    handleOpenModal={() => this.handleOpenModal(project)}
                  ></BriefcaseItem>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          width="full"
          onClose={this.handleCloseModal}
        >
          <h2>{this.state.project && this.state.project.name}</h2>
          <hr />
          {this.state.project && (
            <div className="BriefcaseItem__card-description">
              <div className="BriefcaseItem__badges-container">
                <div className="BriefcaseItem__card-image">
                  <img
                    className="BriefcaseItem__image"
                    src={this.state.project.image}
                    alt=""
                    onClick={this.state.handleOpenModal}
                  />
                </div>
                <hr />
                {this.state.project && this.state.project.demo && (
                  <a
                    href={this.state.project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo{" "}
                  </a>
                )}
                <ul>
                  {this.state.project.detailLists.map((item, index) => {
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
          )}
        </Modal>
      </div>
    );
  }
}

export default Briefcase;
