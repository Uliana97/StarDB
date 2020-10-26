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
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, recoved ${res.status}`);
  }
  return await res.json();
};

getResource("https://swapi.dev/api/people/")
  .then((body) => {
    return body.results;
  })
  .then((people) => {
    people.forEach((el) => {
      console.log(el.height);
    });
  });

ReactDOM.render(<div>Hi there!</div>, document.getElementById("root"));
