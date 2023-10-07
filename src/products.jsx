import React, { Component } from "react";

export default class Products extends Component {
  products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "espresso",
      price: 30,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "Turkish Coffee",
      price: 25,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "Capitchino",
      price: 40,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "double espresso",
      price: 50,
    },
  ];
  render() {
    return (
      <div>
        <div className="ourProducts">
          <h2 className="mt-5 ">Our Products</h2>
          <div className="prods">

          {this.products.map((product) => {
            return (
              <div className="card mt-4 mb-5">
                <img src={product.img}  className="card-img-top card-img" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <p className="card-text">{product.price}$</p>
                  <a href="#" className="btn btn-outline-dark">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          })}
            </div>
        </div>
      </div>
    );
  }
}
