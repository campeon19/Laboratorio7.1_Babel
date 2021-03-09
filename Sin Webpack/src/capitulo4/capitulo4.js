const nav = creatNav();
document.getElementById("nav-capitulo4").appendChild(nav);

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
parrafo1.innerText = `Unas horas antes de la fiesta`;
grid.appendChild(parrafo1);

const parrafo2 = document.createElement("p");
parrafo2.innerText = `Frankie, ayúdame organizar a todos estos niños, ¿cuántos hacen falta? Frankie me dijo que faltaban ya pocos. Recibí una llamada de parte de la empresa que nos iba a brindar la comida y la banda diciendo que no podían pasar porque un camión volcó y no había paso. Iban a llegar directo a la casa, pero un par de horas tarde. Bueno, mejor tarde que nunca pensé.`;
grid.appendChild(parrafo2);

const parrafo3 = document.createElement("p");
parrafo3.innerText = `Al cabo de un rato, empezó a llenarse de personas el centro comercial. ¿Habría alguna actividad? Para salir de dudas, fui a preguntar y me dijeron que un cantante famoso llegaría a dar un pequeño concierto. ¿Quién será ese “cantante famoso”? De pronto recibí la llamada de Frankie. Me dijo que ya estaban todos los invitados y el bus estaba esperando y de inmediato le escribí a Carlos, pero luego me dijo que había un pequeño (en realidad gigante) problema; el concierto va a ser en el parqueo y lo han cerrado. No podemos salir hasta que termine. `;
grid.appendChild(parrafo3);

const img1 = document.createElement("a");
img1.href = "../img/preocupacion.gif";
img1.innerHTML = `<img class="img-fluid centrar" src="../img/preocupacion.gif" alt="">`;
grid.appendChild(img1);

const title2 = document.createElement("h2");
title2.classList = "section-heading";
title2.innerText = "Parte 2";
grid.appendChild(title2);

const parrafo4 = document.createElement("p");
parrafo4.innerText = `Me puse muy nerviosa. Estuve dando vueltas por todo el centro comercial hablando con los encargados, pero no los pude convencer. Tendríamos que esperar. De pronto me recordé de que no le había avisado a Carlos sobre la situación, pero, a llamarlo iba cuando mi teléfono se quedó sin carga. Fui corriendo con Frankie y le pregunté: ¿y ahora que hacemos?, a lo que me respondió que disfrutar el concierto. Bueno… espero que los invitados lo disfruten también.`;
grid.appendChild(parrafo4);

const parrafo5 = document.createElement("p");
parrafo5.innerText = `Durante el concierto Frankie notó que lo estaban llamando… ¡Era Carlos!¡se me olvidó decirle a Frankie que le avisara! Él le contó todo y, claro, Carlos se enojó, pero que podíamos hacer nosotros. Lo lamento mucho por Antonio. Lo bueno es que llegaremos, aunque sea tarde. ¡Oh! y llegaremos junto con la comida y la banda, como lo pidió Carlos. Todo estaba planeado.`;
grid.appendChild(parrafo5);

const img2 = document.createElement("a");
img2.href = "../img/concierto.gif";
img2.innerHTML = `<img class="img-fluid centrar" src="../img/concierto.gif" alt="">`;
grid.appendChild(img2);

const linea1 = document.createElement("hr");
grid.appendChild(linea1);

const btn = document.createElement("div");
btn.classList = "clearfix";
btn.innerHTML = `<a class="btn btn-primary float-right" href="../home/index.html">Home &rarr;</a>`;
grid.appendChild(btn);

document.getElementById("capitulo4-text").appendChild(article);
