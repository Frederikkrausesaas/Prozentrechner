document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");

  document.addEventListener("click", function (e) {
    if (e.target.id === "menu-toggle") {
      const nav = document.getElementById("main-nav");
      nav.classList.toggle("show");
    }
  });
});

function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Fehler beim Laden von", file, err));
}
