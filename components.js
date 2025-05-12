// components.js

document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <header class="site-header">
      <div class="header-container" style="display:flex; justify-content: space-between; align-items: center;">
        <div class="logo">
          <a href="index.html">rechneProzente.de</a>
        </div>
        <div class="menu-toggle" onclick="toggleMenu()">
          <i class="fas fa-bars"></i>
        </div>
        <nav>
          <ul class="nav-links" id="navLinks">
            <li><a href="index.html">Startseite</a></li>
            <li>
              <a href="#">Alle Rechner</a>
              <ul class="dropdown">
                <li><a href="prozentsatz.html">Prozentrechner</a></li>
                <li><a href="mehrwertsteuer.html">Mehrwertsteuerrechner</a></li>
                <li><a href="rabatt.html">Rabattrechner</a></li>
                <li><a href="schritterechner.html">Schrittrechner</a></li>
                <li><a href="kaffee.html">Kaffeerechner</a></li>
                <li><a href="jeansgroessen.html">Jeansgrößenrechner</a></li>
                <li><a href="taschenrechner.html">Taschenrechner</a></li>
                <li><a href="co2.html">CO₂ Fußabdruck Rechner</a></li>
                <li><a href="strom.html">Stromverbrauchsrechner</a></li>
                <li><a href="wasser.html">Wasserkostenrechner</a></li>
              </ul>
            </li>
            <li><a href="kontakt.html">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const footer = `
    <footer style="background-color:#1a73e8; color:white; padding: 1.5rem 2rem; text-align: center;">
      <p>&copy; 2025 rechneProzente.de — Deine Plattform für smarte Rechner.</p>
      <p>
        <strong>Alle Rechner:</strong> Prozentrechner, Mehrwertsteuerrechner, Rabattrechner, Schrittrechner, Kaffeerechner,
        Jeansgrößenrechner, Taschenrechner, CO₂ Rechner, Stromverbrauchsrechner, Wasserkostenrechner
      </p>
    </footer>
  `;

  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;
});

// Menü-Funktion für Mobile
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
