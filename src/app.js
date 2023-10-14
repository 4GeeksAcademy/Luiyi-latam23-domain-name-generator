/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big", "awesome", "happy"];
  let nouns = ["jogger", "racoon", "mouse", "cow"];
  let domains = [".com", ".net", ".org"];

  let domainList = [];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let domain of domains) {
          let domainName = pronoun + adjective + noun + domain;
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
