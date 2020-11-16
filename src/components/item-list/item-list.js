import React from "react";

import { withData } from "../hoc-helpers/";

import { SwapiService } from "../../services/";

import "./item-list.css";

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
  return (
    <ul className="item-list list-group">
      {data.map((item) => (
        <li
          key={item.id}
          className="list-group-item"
          onClick={() => onItemSelected(item.id)}
        >
          {renderLabel(item)}
        </li>
      ))}
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
