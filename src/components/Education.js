import React from "react";
import SectionTitle from "./SectionTitle";
import "./styles/Certificate.css";

class Certificate extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.certificates.map((certificate) => {
          return (
            <CertificateItem certificate={certificate}/>
          );
        })}
      </React.Fragment>
    );
  }
}

const CertificateItem = ({ certificate }) => {
  const [visible, setVisible] = React.useState(true);

  const handleToggle = () => {
    setVisible(!visible);
  }

  return (
    <li
      className="list-group-item Certificate__li"
      key={certificate.id}
    >
      <div className="card Certificate__card border">
        <div className="card-body">
          <h5 className="card-title font-weight-bold lead text-uppercase">
            <span role="img" aria-label="white-heavy-check-mark" onClick={handleToggle} className="cursor-pointer">
              &#128270;
            </span>{" "}
            {certificate.credential_storage ? (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={certificate.credential_storage}
              >
                {certificate.name}
              </a>
            ) : (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                rel="noopener noreferrer"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {certificate.name}
              </a>
            )}
          </h5>
          {visible ? 
            <blockquote className="blockquote Certificate__container ml-5" >
              <p className="mb-0 lead">
                {certificate.entity} ({certificate.emission})
              </p>
              {certificate.credential_id.length > 0 && (
                <small title="text-muted lead">
                  ID de la certificación: {certificate.credential_id}
                </small>
              )}
            </blockquote> : ''
          }
          
        </div>
      </div>
    </li>
  )
}

class Education extends React.Component {
  render() {
    return (
      <ul className="list-group separation">
        <SectionTitle title={"Educación"}></SectionTitle>
        <Certificate certificates={this.props.certificates}></Certificate>
      </ul>
    );
  }
}

export default Education;
