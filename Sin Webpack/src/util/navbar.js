function creatNav(){
    const nav = document.createElement("nav");
    nav.classList = "navbar navbar-expand-lg navbar-light fixed-top";
    nav.id = "mainNav";

    const container = document.createElement("div");
    container.classList = "container";
    nav.appendChild(container);
    
    const title = document.createElement("a");
    title.classList = "navbar-brand";
    title.href = "../home/index.html";
    title.innerHTML = 'Laboratorio 7';
    container.appendChild(title);

    const btn = document.createElement("div");
    btn.innerHTML= `<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    Menu
        <i class="fas fa-bars"></i>
    </button>
    `;
    container.appendChild(btn);

    const collapseNav = document.createElement("div");
    collapseNav.classList = "collapse navbar-collapse";
    collapseNav.id = "navbarResponsive";
    container.appendChild(collapseNav);

    const ulNav = document.createElement("ul");
    ulNav.classList = "navbar-nav ml-auto";
    collapseNav.appendChild(ulNav);

    const li1 = document.createElement("li");
    li1.classList = "nav-item";
    ulNav.appendChild(li1);

    const a1 = document.createElement("a");
    a1.classList = "nav-link";
    a1.href = "../home/index.html";
    a1.innerText = "Home";
    li1.appendChild(a1);

    const li2 = document.createElement("li");
    li2.classList = "nav-item";
    ulNav.appendChild(li2);

    const a2 = document.createElement("a");
    a2.classList = "nav-link";
    a2.href = "../capitulo1/capitulo1.html";
    a2.innerText = "Capitulo 1";
    li2.appendChild(a2);

    const li3 = document.createElement("li");
    li3.classList = "nav-item";
    ulNav.appendChild(li3);

    const a3 = document.createElement("a");
    a3.classList = "nav-link";
    a3.href = "../capitulo2/capitulo2.html";
    a3.innerText = "Capitulo 2";
    li3.appendChild(a3);

    const li4 = document.createElement("li");
    li4.classList = "nav-item";
    ulNav.appendChild(li4);

    const a4 = document.createElement("a");
    a4.classList = "nav-link";
    a4.href = "../capitulo3/capitulo3.html";
    a4.innerText = "Capitulo 3";
    li4.appendChild(a4);

    const li5 = document.createElement("li");
    li5.classList = "nav-item";
    ulNav.appendChild(li5);

    const a5 = document.createElement("a");
    a5.classList = "nav-link";
    a5.href = "../capitulo4/capitulo4.html";
    a5.innerText = "Capitulo 4";
    li5.appendChild(a5);

    return nav;

};