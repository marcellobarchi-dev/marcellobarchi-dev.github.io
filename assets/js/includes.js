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
