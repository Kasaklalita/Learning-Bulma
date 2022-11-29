import React from "react";

const GreetingsSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-6-tablet is-3-desktop">
            <h1 className="is-size-1-desktop title">Docker</h1>
            <h2 className="is-size-2-desktop subtitle">Dark Roast</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              consequatur aperiam repellendus et quisquam quo, itaque corrupti
              deleniti optio neque.
            </p>
          </div>
          <div className="column is-6-tablet is-5-desktop has-text-centered">
            <img
              src={require("../../assets/product.png")}
              alt="docker coffee image"
              className="px-6"
            />
          </div>
          <div className="column is-12-tablet is-4-desktop">
            <div className="is-size-4 mb-4">$10.95</div>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officiis, qui.
            </p>
            <form>
              <div className="field">
                <div className="control mb-6">
                  <div className="select is-dark">
                    <select>
                      <option>Small (250g)</option>
                      <option>Large (500g)</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="button is-primary">Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreetingsSection;
