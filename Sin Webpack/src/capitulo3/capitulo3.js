const nav = creatNav();
document.getElementById("nav-capitulo3").appendChild(nav);

const article = document.createElement("article");

const container = document.createElement("div");
container.classList = "container";
article.appendChild(container);

const row = document.createElement("div");
row.classList = "row";
container.appendChild(row);

const grid = document.createElement("div");
grid.classList = "col-lg-8 col-md-10 mx-auto";
row.appendChild(grid);

const title1 = document.createElement("h2");
title1.classList = "section-heading";
title1.innerText = "Parte 1";
grid.appendChild(title1);

const parrafo1 = document.createElement("p");
parrafo1.innerText = `El día previo al cumpleaños de Antonio`;
grid.appendChild(parrafo1);

const parrafo2 = document.createElement("p");
parrafo2.innerText = `Lucía, necesito tu ayuda. Necesito que te reúnas con todos los invitados en el centro comercial. Allí también se reunirá la banda y la carreta de shucos. Cuando todos estén listos, nos avisas por WhatsApp y agarran camino hacia la casa. Frankie, mi hermano, te estará apoyando y cualquier cosa me escribes. Ya está todo organizado para el gran día; espero que Antonio se la pase muy bien. Le demostraré a Carmen, mi esposa, que sí soy capaz de hacer buenas fiestas sorpresa.`;
grid.appendChild(parrafo2);

const img1 = document.createElement("a");
img1.href = "../img/orgullo.gif";
img1.innerHTML = `<img class="img-fluid centrar" src="../img/orgullo.gif" alt="">`;
grid.appendChild(img1);

const title2 = document.createElement("h2");
title2.classList = "section-heading";
title2.innerText = "Parte 2";
grid.appendChild(title2);

const parrafo4 = document.createElement("p");
parrafo4.innerText = `Al día siguiente en la tarde`;
grid.appendChild(parrafo4);

const parrafo5 = document.createElement("p");
parrafo5.innerText = `Ya recibí el Whatsappaso de Lucía, vamos ahorita. Salimos de la casa y yo, al igual que Antonio, estaba emocionado por la fiesta, ¡quiero ver su reacción! (al igual que la de Carmen claro). Llegamos a la casa de Lucía y cuando entramos, yo ya sabía que no iba a haber nadie dentro. Pero me empecé a poner nervioso porque no aparecía nadie y supuestamente ya tendrían que haber aparecido todos. Le pedí a Carmen que llamara a su hermana, pero ella no contestó. Luego recibí una gran maltratada por parte de Carmen y Antonio estaba llorando. ¿¡Donde están todos!? Me recordé que Frankie andaba con ellos y lo llamé. Llamé y llamé y como a la décima llamada contestó… No podía creer lo que había pasado. Y ahora, ¿cómo se lo comunicó a Antonio?`;
grid.appendChild(parrafo5);

const img2 = document.createElement("a");
img2.href = "../img/preocupado.gif";
img2.innerHTML = `<img class="img-fluid centrar" src="../img/preocupado.gif" alt="">`;
grid.appendChild(img2);

const linea1 = document.createElement("hr");
grid.appendChild(linea1);

const btn = document.createElement("div");
btn.classList = "clearfix";
btn.innerHTML = `<a class="btn btn-primary float-right" href="../capitulo4/capitulo4.html">Capitulo 4 &rarr;</a>`;
grid.appendChild(btn);

document.getElementById("capitulo3-text").appendChild(article);
