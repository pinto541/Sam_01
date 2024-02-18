import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <br />
      <br />
      <br />

      <div className="service-all">
        <div className="s-header">
          <h2 style={{ fontFamily: "" }}>
            Our <span style={{ color: "green" }}>Services</span>
          </h2>
          <span className="max">
            <p>
              We are renowned name in real estate advisory services. What drive
              us towards our clients/ landlords and our associates is our
              Relation, Satisfaction, Commitment, and Trust. Our Services
              include end to end deliverables to our clients by searching,
              suggesting suitable property.
            </p>
          </span>
        </div>

        <div className="s-all">
          <div className="s-1">
            <br />

            <br />

            <h5>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Residential Real Estate
            </h5>
            <br />
            <h5>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Commercial Real Estate
            </h5>
            <br />
            <h5>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Property Management
            </h5>
            <br />
            <br />
            <br />
            <a href="/Service1">
              <button className="s-button">Services</button>
            </a>
          </div>

          <div className="s-1">
            <br />

            <br />

            <h5>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Investment Consultation
            </h5>
            <br />
            <h5>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Real Estate Development
            </h5>
            <br />
            <h5>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Market Insights and Advisory
            </h5>
            <br />
            <br />
            <br />
            <a href="/Service1">
              <button className="s-button">Services</button>
            </a>
          </div>

          <div className="s-1">
            <br />

            <br />

            <h5>
              <FontAwesomeIcon
                className="fai"
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Relocation Services
            </h5>
            <br />
            <h5>
              <FontAwesomeIcon
                className="fai"
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Industrial Land & Warehouse Services
            </h5>
            <br />
            <h5>
              <FontAwesomeIcon
                className="fai"
                icon={faArrowRight}
                style={{ color: "#25ad34" }}
              />{" "}
              Real Estate Consulting
            </h5>
            <br />
            <br />

            <a href="/Service1">
              <button className="s-button">Services</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
