import React from "react";
import "./styles/Service.css";
import SectionTitle from "./SectionTitle";

const ServiceItem = ({ title, description }) => (
  <div className="col-md-6">
    <div className="single-service">
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <span className="circle-before"></span>
    </div>
  </div>
);

const Service = ({ title }) => (
  <section className="section-services pt-2">
    <div className="Service__container">
      <div className="row justify-content-center text-center">
        <div className="col-md-10 col-lg-8">
          <div className="header-section separation">
            <SectionTitle title={title} />
          </div>
        </div>
      </div>
      <div className="row">
        <ServiceItem
          title="Consultoría IT"
          description="Especializado en migraciones y optimización de sistemas legacy Laravel y Angular, diseño de bases de datos y suites de tests automáticos. Transforma tu infraestructura tecnológica con soluciones personalizadas y eficientes. ¡Optimiza tu sistema y mejora su rendimiento!"
        />
        <ServiceItem
          title="Desarrollo de páginas web"
          description="Creación de páginas para información empresarial, catálogos de productos, y opciones de contacto. Implemento carritos de compras, gestión de pedidos, optimización móvil y SEO. ¡Transforma tu presencia online con soluciones personalizadas!"
        />
      </div>
    </div>
  </section>
);

export default Service;
