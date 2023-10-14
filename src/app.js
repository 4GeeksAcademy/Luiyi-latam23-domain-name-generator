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

  let domainList = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          let domainName = pronoun[i] + adj[j] + noun[k] + domain[l];
          domainList.push(domainName);
        }
      }
    }
  }

  console.log(domainList);
};

// Test project resolution with a different approach!

// let pronounRandom = pronoun[Math.floor(Math.random() * pronoun.length)];

// let adjRandom = adj[Math.floor(Math.random() * adj.length)];

// let nounRandom = noun[Math.floor(Math.random() * noun.length)];

// let domainRandom = domain[Math.floor(Math.random() * domain.length)];

// createddomain.push(pronounRandom + adjRandom + nounRandom + domainRandom);

// let myString = createddomain.join('');
