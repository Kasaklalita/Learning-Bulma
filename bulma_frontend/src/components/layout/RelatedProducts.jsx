import React, { useEffect, useState } from "react";
import RelatedProduct from "../UI/RelatedProduct";
import axios from "axios";

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchRelatedProducts = async () => {
    console.log("fetch");
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v1/get-latest-products"
    );
    setRelatedProducts(response.data);
  };

  return (
    <section className="section is-hidden-mobile">
      <div className="container">
        <h3
          className="title has-text-centered is-size-4"
          onClick={fetchRelatedProducts}
        >
          Related Products
        </h3>
        <div className="columns mt-5 is-8 is-variable is-centered">
          {relatedProducts.map((relatedProduct) => {
            return (
              <RelatedProduct
                title={relatedProduct.name}
                price={relatedProduct.price}
                previewUrl={relatedProduct.get_image}
                key={relatedProduct.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
