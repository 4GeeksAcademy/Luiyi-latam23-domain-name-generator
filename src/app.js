/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "awesome", "happy"];
  let noun = ["jogger", "racoon", "mouse", "cow"];
  let domain = [".com", ".net", ".org"];
  let createddomain = [];

  let pronounRandom = pronoun[Math.floor(Math.random() * pronoun.length)];
  console.log(pronounRandom);

  let adjRandom = adj[Math.floor(Math.random() * adj.length)];
  console.log(adjRandom);

  let nounRandom = noun[Math.floor(Math.random() * noun.length)];
  console.log(nounRandom);

  let domainRandom = domain[Math.floor(Math.random() * domain.length)];
  console.log(domainRandom);

  createddomain.push(pronounRandom + adjRandom + nounRandom + domainRandom);
  console.log(createddomain);

  let myString = createddomain.join();
  console.log(myString);

  // for (let i = 0; i < pronoun.length; i++) {
  //   let pronounRandom = Math.floor(Math.random() * pronoun.length - 1);
  //   console.log(pronoun[pronounRandom]);
  // }
  // for (let i = 0; i < adj.length; i++) {
  //   let adjRandom = Math.floor(Math.random() * adj.length - 1);
  //   console.log(adj[adjRandom]);
  // }
  // for (let i = 0; i < noun.length; i++) {
  //   let nounRandom = Math.floor(Math.random() * pronoun.length - 1);
  //   console.log(noun[nounRandom]);
  // }
};
