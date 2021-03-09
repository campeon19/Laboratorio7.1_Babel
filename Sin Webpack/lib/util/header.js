"use strict";

function createHeader(urlImg, titulo, subtitulo) {
  var header = document.createElement("header");
  header.classList = "masthead";
  header.style.backgroundImage = urlImg;
  var overlay = document.createElement("div");
  overlay.classList = "overlay";
  header.appendChild(overlay);
  var container = document.createElement("div");
  container.classList = "container";
  overlay.appendChild(container);
  var row = document.createElement("div");
  row.classList = "row";
  container.appendChild(row);
  var grid = document.createElement("div");
  grid.classList = "col-lg-8 col-md-10 mx-auto";
  row.appendChild(grid);
  var headT = document.createElement("div");
  headT.classList = "site-heading";
  row.appendChild(headT);
  var title = document.createElement("h1");
  title.innerText = titulo;
  headT.appendChild(title);
  var subtitle = document.createElement("span");
  subtitle.classList = "subheading";
  subtitle.innerText = subtitulo;
  headT.appendChild(subtitle);
  return header;
}

;