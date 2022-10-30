import React from "react";
import SectionTitle from "./SectionTitle";

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
      <div
        className="BadgesListItem text-center"
      >
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.image}
          alt={`${this.props.badge.name}`}
        />
        <strong className="d-block">
          <span className="badge badge-success BadgesListItem__tag-title text-center mb-1">
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
      <div className="pb-3 pt-3">
        <SectionTitle title={this.props.title}></SectionTitle>
        <ul className="BadgesListItem__ul nav nav-pills flex-column flex-sm-row justify-content-center">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem__li nav-item ml-2 mr-2 border" href="#" key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
