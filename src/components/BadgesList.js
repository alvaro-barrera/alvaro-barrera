import React from "react";

import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  handleMouseOver = (e) => {
    if (e.target.querySelector("strong")) {
      e.target.querySelector("strong").className = "d-block";
    }
  };
  handleMouseLeave = (e) => {
    if (e.target.querySelector("strong")) {
      e.target.querySelector("strong").className = "d-none";
    }
  };
  handleMouseOverImage = (e) => {
    if (e.target.parentElement.querySelector("strong")) {
      e.target.parentElement.querySelector("strong").className = "d-block";
    }
    console.log(e.target.parentElement);
  };
  handleMouseLeaveImage = (e) => {
    if (e.target.parentElement.querySelector("strong")) {
      e.target.parentElement.querySelector("strong").className = "d-none";
    }
  };
  render() {
    return (
      <div className="BadgesListItem text-center"
      onMouseLeave={this.handleMouseLeave}
      >
        <img
          onMouseOver={this.handleMouseOverImage}
          className="BadgesListItem__avatar"
          src={this.props.badge.image}
          alt={`${this.props.badge.name}`}
        />
        <strong className="d-none">
          <span class="badge badge-success BadgesListItem__tag-title text-center mb-1">
            {this.props.badge.name}
          </span>
        </strong>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="text-center">
          <span class="badge badge-secondary BadgesList__title">
            {this.props.title}
          </span>
        </h3>
        <ul class="nav nav-pills flex-column flex-sm-row justify-content-center">
          {this.props.badges.map((badge) => {
            return (
              <li class="nav-item ml-2 mr-2" href="#" key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
        {/* <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
              return (
                <li key={badge.id}>
                  <BadgesListItem badge={badge} />
                </li>
              );
            })}
          </ul>
        </div> */}
      </React.Fragment>
    );
  }
}

export default BadgesList;
