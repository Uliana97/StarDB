import React from "react";
import ReactDOM from "react-dom";

// fetch("https://swapi.dev/api/people/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource("https://swapi.dev/api/people/").then((body) => {
  console.log(body.results);
});

ReactDOM.render(<div>Hi there!</div>, document.getElementById("root"));
