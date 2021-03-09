"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creatNav = void 0;

var creatNav = function creatNav() {
  var nav = document.createElement("nav");
  nav.classList = "navbar navbar-expand-lg navbar-light fixed-top";
  nav.id = "mainNav";
  var container = document.createElement("div");
  container.classList = "container";
  nav.appendChild(container);
  var title = document.createElement("a");
  title.classList = "navbar-brand";
  title.href = "index.html";
  title.innerHTML = 'Laboratorio 7';
  container.appendChild(title);
  var btn = document.createElement("div");
  btn.innerHTML = "<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    Menu\n        <i class=\"fas fa-bars\"></i>\n    </button>\n    ";
  container.appendChild(btn);
  var collapseNav = document.createElement("div");
  collapseNav.classList = "collapse navbar-collapse";
  collapseNav.id = "navbarResponsive";
  container.appendChild(collapseNav);
  var ulNav = document.createElement("ul");
  ulNav.classList = "navbar-nav ml-auto";
  collapseNav.appendChild(ulNav);
  var li1 = document.createElement("li");
  li1.classList = "nav-item";
  ulNav.appendChild(li1);
  var a1 = document.createElement("a");
  a1.classList = "nav-link";
  a1.href = "index.html";
  a1.innerText = "Home";
  li1.appendChild(a1);
  var li2 = document.createElement("li");
  li2.classList = "nav-item";
  ulNav.appendChild(li2);
  var a2 = document.createElement("a");
  a2.classList = "nav-link";
  a2.href = "capitulo1.html";
  a2.innerText = "Capitulo 1";
  li2.appendChild(a2);
  var li3 = document.createElement("li");
  li3.classList = "nav-item";
  ulNav.appendChild(li3);
  var a3 = document.createElement("a");
  a3.classList = "nav-link";
  a3.href = "capitulo2.html";
  a3.innerText = "Capitulo 2";
  li3.appendChild(a3);
  var li4 = document.createElement("li");
  li4.classList = "nav-item";
  ulNav.appendChild(li4);
  var a4 = document.createElement("a");
  a4.classList = "nav-link";
  a4.href = "capitulo3.html";
  a4.innerText = "Capitulo 3";
  li4.appendChild(a4);
  var li5 = document.createElement("li");
  li5.classList = "nav-item";
  ulNav.appendChild(li5);
  var a5 = document.createElement("a");
  a5.classList = "nav-link";
  a5.href = "capitulo4.html";
  a5.innerText = "Capitulo 4";
  li5.appendChild(a5);
  return nav;
};

exports.creatNav = creatNav;