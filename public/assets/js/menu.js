// Variable zur Zeitsteuerung des Menüs, um zu schnelle Wiederholungen zu verhindern
let lastMenuToggleTime = 0;

// Referenzen zu den DOM-Elementen für das Menü
const menuCheckbox = document.getElementById('menu_checkbox');
const menuElement = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');

// Setzt die Checkbox beim Laden der Seite zurück
document.addEventListener("DOMContentLoaded", () => {
  menuCheckbox.checked = false;
});

// Verhindert, dass Klicks im Menü den Container-Event auslösen
menuElement.addEventListener('click', event => {
    event.stopPropagation();
});

// Event-Listener für den Container
menuContainer.addEventListener('click', () => {
    toggleMenu();
});

// Animationen für die role-list-Elemente setzen
document.getElementById('role-list').style.animationName = 'changeTwo';
document.getElementById('button-animation').style.animationName = 'hero-buttonGardient';

// Event-Listener für Desktop-Ansicht (ab 640px Breite)
// menuCheckbox.addEventListener('mouseover', () => {
//     if (window.matchMedia('(min-width: 640px)').matches) {
//         toggleMenu();
//     }
// });

// Event-Listener für das Verlassen des Menüs
// menuElement.addEventListener('mouseleave', event => {
//     if (window.matchMedia('(min-width: 640px)').matches) {
//         toggleMenu();
//     }
// });

/**
 * Funktion zum Ein- und Ausblenden des Menüs
 * Verhindert zu schnelle Wiederholungen durch Zeitsteuerung
 * Steuert die Sichtbarkeit und Animation des Menüs
 */
function toggleMenu() {
    // Prüft, ob seit dem letzten Toggle mindestens 250ms vergangen sind
    if (lastMenuToggleTime === null || new Date().getTime() - lastMenuToggleTime > 1) {
        // Menü einblenden
        if (menuElement.style.visibility !== 'visible') {
            menuElement.style.visibility = 'visible';
            menuContainer.style.visibility = 'visible';
            menuElement.style.opacity = '1';
            menuElement.style.transform = 'translate3d(0, 0px, 0)';
            menuCheckbox.checked = true;
        }
        // Menü ausblenden
        else {
            menuElement.style.visibility = 'hidden';
            menuContainer.style.visibility = 'hidden';
            menuElement.style.opacity = '0';
            menuElement.style.transform = 'translate3d(0, 100px, 0)';
            menuCheckbox.checked = false;
        }
    }
    // Aktualisiert den Zeitstempel des letzten Toggles
    lastMenuToggleTime = new Date().getTime();
}

// Exportiert die toggleMenu-Funktion für die Verwendung in anderen Modulen
window.toggleMenu = toggleMenu;
