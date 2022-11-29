import React from "react";

const ProductSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-8 is-variable">
          <div className="column is-7-tablet">
            <div className="tabs is-boxed">
              <ul>
                <li className="is-active" data-target="product-details">
                  <a>Product Details</a>
                </li>
                <li data-target="delivery-information">
                  <a>Delivery Information</a>
                </li>
              </ul>
            </div>
            <div className="px-2" id="tab-content">
              <div id="product-details">
                <h1 className="is-size-5 title">Product Details</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, ducimus veniam repellat repudiandae quasi aliquid
                  commodi magnam quod facere architecto autem consequuntur velit
                  dolor, ut delectus ipsum necessitatibus iusto unde!
                </p>
              </div>
              <div id="delivery-information" className="is-hidden">
                <h1 className="is-size-5 title">Delivery Information</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, ducimus veniam repellat repudiandae quasi aliquid
                  commodi magnam quod facere architecto autem consequuntur velit
                  dolor, ut delectus ipsum necessitatibus iusto unde!
                </p>
              </div>
            </div>
          </div>
          <div className="column is-5-tablet">
            <div className="message">
              <div className="message-header">
                <p>Earn points with the coffee club!</p>
              </div>
              <div className="message-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus numquam consequatur rerum dignissimos deleniti
                  nostrum sapiente voluptas impedit, perspiciatis distinctio
                  voluptate nemo maiores, necessitatibus quia totam fugit
                  pariatur doloremque quisquam?
                </p>
                <div className="has-text-centered mt-5">
                  <button className="button" id="signup">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
