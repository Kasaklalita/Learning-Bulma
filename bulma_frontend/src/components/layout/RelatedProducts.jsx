import React from "react";

const RelatedProducts = () => {
  return (
    <section className="section is-hidden-mobile">
      <div className="container">
        <h3 className="title has-text-centered is-size-4">Related Products</h3>
        <div className="columns mt-5 is-8 is-variable is-centered">
          <div className="column is-4-tablet is-3-desktop">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={require("../../assets/p1.png")} alt="Product" />
              </div>
              <div className="card-content">
                <p>$12.95</p>
                <p className="title is-size-5">Cortardo Cup</p>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <a href="" className="has-text-grey">
                    View
                  </a>
                </p>
              </footer>
            </div>
          </div>
          <div className="column is-4-tablet is-3-desktop">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={require("../../assets/p1.png")} alt="Product" />
              </div>
              <div className="card-content">
                <p>$12.95</p>
                <p className="title is-size-5">Docker Light</p>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <a href="" className="has-text-grey">
                    View
                  </a>
                </p>
              </footer>
            </div>
          </div>
          <div className="column is-4-tablet is-3-desktop">
            <div className="card">
              <div className="card-image has-text-centered px-6">
                <img src={require("../../assets/p1.png")} alt="Product" />
              </div>
              <div className="card-content">
                <p>$12.95</p>
                <p className="title is-size-5">Coffee Crush</p>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <a href="" className="has-text-grey">
                    View
                  </a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
