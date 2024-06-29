import React from "react";
import "./styles/BriefcaseItem.css";

class Customer extends React.Component {
  render() {
    return (
      <div className="pb-3 pt-5 separation">
        <section class="client">
          <div class="container">
            <div class="Customer__container row">
              <div class="Customer__carousel-client">
                <div class="slide">
                  {this.props.customers.map((customer, i) => (
                    <a
                      href={customer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img key={i} src={customer.logo} alt={customer.text} title={customer.text}/>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Customer;
