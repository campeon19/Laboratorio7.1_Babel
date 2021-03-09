function createHeader(urlImg, titulo, subtitulo){
    const header = document.createElement("header");
    header.classList = "masthead";
    header.style.backgroundImage = urlImg;

    const overlay = document.createElement("div");
    overlay.classList = "overlay";
    header.appendChild(overlay);

    const container = document.createElement("div");
    container.classList = "container";
    overlay.appendChild(container);

    const row = document.createElement("div");
    row.classList = "row";
    container.appendChild(row);
    
    const grid = document.createElement("div");
    grid.classList = "col-lg-8 col-md-10 mx-auto";
    row.appendChild(grid);

    const headT = document.createElement("div");
    headT.classList = "site-heading";
    row.appendChild(headT);

    const title = document.createElement("h1");
    title.innerText = titulo;
    headT.appendChild(title);

    const subtitle = document.createElement("span");
    subtitle.classList = "subheading";
    subtitle.innerText = subtitulo;
    headT.appendChild(subtitle);

    return header

};