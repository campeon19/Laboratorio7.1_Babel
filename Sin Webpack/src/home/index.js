
const nav = creatNav();
document.getElementById("nav-index").appendChild(nav);

const row1 = document.createElement("row");
row1.classList = "row";

const grid1 = document.createElement("div");
grid1.classList = "col-lg-8 col-md-10 mx-auto";
row1.appendChild(grid1);

const prefacio = document.createElement("p");
prefacio.innerHTML = 'Esta es una historia que se redacto para Comunicacion Efectiva. Sabiendo que el titulo tenia que ser "Una fiesta de cumpleaños que acaba mal" y utilizando la tecnica de enfoque narrativo multiple, escribí esta historia.';
grid1.appendChild(prefacio);

const indice1 = document.createElement("div");
indice1.classList = "post-preview";
grid1.appendChild(indice1);

const linkInd1 = document.createElement("a");
linkInd1.href = "../capitulo1/capitulo1.html";
linkInd1.innerHTML= '<h2 class="post-title">Capitulo 1</h2><h3 class="post-subtitle">Perspectiva de Antonio</h3>';
indice1.appendChild(linkInd1);

const linea1 = document.createElement("hr");
grid1.appendChild(linea1);

const indice2 = document.createElement("div");
indice2.classList = "post-preview";
grid1.appendChild(indice2);

const linkInd2 = document.createElement("a");
linkInd2.href = "../capitulo2/capitulo2.html";
linkInd2.innerHTML= '<h2 class="post-title">Capitulo 2</h2><h3 class="post-subtitle">Perspectiva de Carmen, la mama de Antonio</h3>';
indice2.appendChild(linkInd2);

const linea2 = document.createElement("hr");
grid1.appendChild(linea2);

const indice3 = document.createElement("div");
indice3.classList = "post-preview";
grid1.appendChild(indice3);

const linkInd3 = document.createElement("a");
linkInd3.href = "../capitulo3/capitulo3.html";
linkInd3.innerHTML= '<h2 class="post-title">Capitulo 3</h2><h3 class="post-subtitle">Perspectiva de Carlos, el papa de Antonio</h3>';
indice3.appendChild(linkInd3);

const linea3 = document.createElement("hr");
grid1.appendChild(linea3);

const indice4 = document.createElement("div");
indice4.classList = "post-preview";
grid1.appendChild(indice4);

const linkInd4 = document.createElement("a");
linkInd4.href = "../capitulo4/capitulo4.html";
linkInd4.innerHTML= '<h2 class="post-title">Capitulo 4</h2><h3 class="post-subtitle">Perspectiva de Lucia, tia de Antonio</h3>';
indice4.appendChild(linkInd4);

const linea4 = document.createElement("hr");
grid1.appendChild(linea4);


document.getElementById("container-index").appendChild(row1);
