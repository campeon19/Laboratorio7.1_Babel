const nav = creatNav();
document.getElementById("nav-capitulo1").appendChild(nav);

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
parrafo1.innerText = `Al fin, hoy es el día; después de esperar un año, es mi cumpleaños. ¿Qué me tendrán preparado mis papás…? ¿Me irán a hacer una fiesta sorpresa… o tal vez me van a dar la computadora que durante tanto tiempo he deseado? ¡Que emoción!, no puedo esperar a ver que me depara el futuro…`;
grid.appendChild(parrafo1);

const parrafo2 = document.createElement("p");
parrafo2.innerText = `De repente, mis pensamientos fueron interrumpidos por unos pasos que se acercaban a mi habitación. Mis papás, junto con mis hermanos entraron sigilosamente y gritaron… ¡feliz cumpleaños Antonio!, se lanzaron a darme un gran abrazo. Yo, muy emocionado, les di las gracias y también los abracé. Me dijeron que me fuera a bañar y que me alistara para ir al colegio, lo cual hice, y que luego bajara a desayunar. ¡El desayuno estaba delicioso! Una torre de panqueques, y un Milkshake de banano, mi favorito; el día había empezado estupendo.`;
grid.appendChild(parrafo2);

const parrafo3 = document.createElement("p");
parrafo3.innerText = `Al llegar al colegio, todos mis compañeros me dijeron feliz cumpleaños. Sin embargo, muchos de ellos andaban algo sospechosos, como si evitaran que me enterara de algo, ¿mi fiesta sorpresa de cumpleaños tal vez? No podía aguantar la curiosidad, así que en el recreo me acerqué sigilosamente a mis amigos, los cuales estaban hablando en voz baja. Lo único que logre escuchar fueron estas palabras: sorpresa… noche… fiesta…, definitivamente hablaban de una fiesta sorpresa… ¡mi fiesta sorpresa! El resto del día, no pude pensar en nada más que en las posibilidades de mi fiesta. ¡Que emoción!`;
grid.appendChild(parrafo3);

const img1 = document.createElement("a");
img1.href = "../img/feliz.gif";
img1.innerHTML = `<img class="img-fluid centrar" src="../img/feliz.gif" alt="">`;
grid.appendChild(img1);

const title2 = document.createElement("h2");
title2.classList = "section-heading";
title2.innerText = "Parte 2";
grid.appendChild(title2);

const parrafo4 = document.createElement("p");
parrafo4.innerText = `En la tarde noche, ya en mi casa, mis papás me dijeron que teníamos que salir. Por supuesto, yo ya sabía a que iba todo esto. Me arreglé, me puse guapo y nos fuimos. Al final, llegamos a la casa de mi tía Lucía, una casa muy grande donde normalmente celebrábamos los cumpleaños. Nos bajamos del carro y mis papás notaron mi emoción, pero no dijeron nada. Cuando llegamos a la puerta del gran salón, mis papás la abrieron y dijeron: ¡Feliz cumplea….! No había nadie. Todo el lugar estaba arreglado, pero no había nadie. Al principio, estaba emocionado esperando que de algún lado salieran los invitados con muchos regalos, pero… nadie. Me puse nervioso y triste, en especial al ver que mis papás estaban nerviosos y mi mamá le gritaba a mi papá. ¿Qué estaba pasando…, me abandonaron, o acaso nadie quiso venir? No pude evitarlo y me puse a llorar.`;
grid.appendChild(parrafo4);

const img2 = document.createElement("a");
img2.href = "../img/triste.gif";
img2.innerHTML = `<img class="img-fluid centrar" src="../img/triste.gif" alt="">`;
grid.appendChild(img2);

const linea1 = document.createElement("hr");
grid.appendChild(linea1);

const btn = document.createElement("div");
btn.classList = "clearfix";
btn.innerHTML = `<a class="btn btn-primary float-right" href="../capitulo2/capitulo2.html">Capitulo 2 &rarr;</a>`;
grid.appendChild(btn);

document.getElementById("capitulo1-text").appendChild(article);
