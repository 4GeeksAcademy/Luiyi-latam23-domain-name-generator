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

  let pronounRandomIndex, adjRandomIndex, nounRandomIndex, domainRandomIndex;

  for (let i = 0; i < 1; i++) {
    pronounRandomIndex = Math.floor(Math.random() * pronoun.length);
    adjRandomIndex = Math.floor(Math.random() * adj.length);
    nounRandomIndex = Math.floor(Math.random() * noun.length);
    domainRandomIndex = Math.floor(Math.random() * domain.length);
  }

  let domainName =
    pronoun[pronounRandomIndex] +
    adj[adjRandomIndex] +
    noun[nounRandomIndex] +
    domain[domainRandomIndex];

  console.log(domainName);
};

// Test project resolution with a different approach!

// let pronounRandom = pronoun[Math.floor(Math.random() * pronoun.length)];

// let adjRandom = adj[Math.floor(Math.random() * adj.length)];

// let nounRandom = noun[Math.floor(Math.random() * noun.length)];

// let domainRandom = domain[Math.floor(Math.random() * domain.length)];

// createddomain.push(pronounRandom + adjRandom + nounRandom + domainRandom);

// let myString = createddomain.join('');
