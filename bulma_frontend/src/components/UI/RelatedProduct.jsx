import React from "react";

const RelatedProduct = ({ title, price, previewUrl }) => {
  console.log("asdf");
  return (
    <div className="column is-4-tablet is-3-desktop">
      <div className="card">
        <div className="card-image has-text-centered px-6">
          <img src={previewUrl} alt="Product" />
        </div>
        <div className="card-content">
          <p>${price}</p>
          <p className="title is-size-5">{title}</p>
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
  );
};

export default RelatedProduct;
