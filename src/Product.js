import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, price, rating, image }) {
  const [basket, dispatch] = useStateValue();

  console.log("this is the basket >>>", basket);
  const AddedToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={AddedToBasket}>Add to Basket</button>
      </div>
      <div></div>
    </>
  );
}

export default Product;
