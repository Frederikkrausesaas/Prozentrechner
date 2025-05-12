// components.js
document.addEventListener("DOMContentLoaded", () => {
  // HEADER einfügen
  document.getElementById("header").innerHTML = `
    <header class="site-header">
      <div class="header-container">
        <div class="logo"><a href="index.html">rechneProzente.de</a></div>
        <nav>
          <div class="menu-toggle" id="menu-toggle">
            <i class="fas fa-bars"></i>
          </div>
          <ul class="nav-links" id="nav-links">
            <li><a href="index.html">Startseite</a></li>
            <li><a href="prozentsatz.html">Prozentrechner</a></li>
            <li><a href="mehrwertsteuer.html">Mehrwertsteuerrechner</a></li>
            <li><a href="rabatt.html">Rabattrechner</a></li>
            <li><a href="schritterechner.html">Schrittrechner</a></li>
            <li><a href="kaffeerechner.html">Kaffeerechner</a></li>
            <li><a href="jeansgroessen.html">Jeansgrößenrechner</a></li>
            <li><a href="taschenrechner.html">Taschenrechner</a></li>
            <li><a href="co2.html">CO₂-Rechner</a></li>
            <li><a href="stromverbrauch.html">Stromverbrauchsrechner</a></li>
            <li><a href="wasserkosten.html">Wasserkostenrechner</a></li>
            <li><a href="alle-rechner.html">Alle Rechner</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  // FOOTER einfügen
  document.getElementById("footer").innerHTML = `
    <footer class="site-footer">
      <p>&copy; 2025 rechneProzente.de – Alle Rechte vorbehalten</p>
      <p><a href="kontakt.html">Kontakt</a> | <a href="alle-rechner.html">Alle Rechner</a></p>
    </footer>
  `;

  // Burger-Menü Toggle
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

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
