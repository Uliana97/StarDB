import React from "react";

import "./item-list.css";

const ItemList = ({ data, onItemSelected, children }) => {
  return (
    <ul className="item-list list-group">
      {data.map((item) => (
        <li
          key={item.id}
          className="list-group-item"
          onClick={() => onItemSelected(item.id)}
        >
          {children(item)}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
