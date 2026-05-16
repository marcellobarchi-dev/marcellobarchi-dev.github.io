function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Errore nel caricamento di", file, error));
}

// Include componenti
includeHTML("navbar", "/components/navbar.html");
includeHTML("footer", "/components/footer.html");

// ⭐ Evidenzia il link attivo
fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // ⭐ Dopo che la navbar è stata inserita nel DOM
    const path = window.location.pathname;
    let currentPage = path.split("/").filter(Boolean).pop() || "index.html";

    document.querySelectorAll("#navbar a.nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;

      const linkPage = href.split("/").filter(Boolean).pop();

      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  });
