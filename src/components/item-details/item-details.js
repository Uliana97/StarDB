import React, { useState, useEffect } from "react";

import { Spinner } from "../spinner";

import "./item-details.css";

export const Labels = ({ itemData, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemData[field]}</span>
    </li>
  );
};

const ItemDetails = ({ itemId, getData, getImg, children }) => {
  const [itemData, setItemData] = useState(null);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    let cancelled = false;

    !cancelled && newPerson();

    return (cancelled = true);
  }, [itemId, getData, getImg]);

  const newPerson = () => {
    if (!itemId) {
      return;
    }

    getData(itemId).then((itemData) => {
      setLoading(false);
      setItemData(itemData);
      setImg(getImg(itemData));
    });
  };

  if (!itemData) {
    return <span>Choose a hero!</span>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="item-details card">
      <img className="item-image" src={img} alt="img" />
      <div className="card-body">
        <h4>{itemData.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { itemData })
          )}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
