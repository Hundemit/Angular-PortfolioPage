/**
 * Animations-Skript für Fade-In Effekte beim Scrollen
 * Dieses Skript ermöglicht es, Elemente mit dem data-animation Attribut
 * mit einem Fade-In Effekt zu versehen, wenn sie in den Viewport scrollen
 *
 * Verwendet wird es in Verbindung mit scroll.js für nahtlose Animationen
 * beim Navigieren zu verschiedenen Abschnitten der Seite
 */

// Wählt alle Elemente aus, die ein data-animation Attribut haben
// Dies ist flexibler als die vorherige Klassen-basierte Auswahl
const animatedElements = document.querySelectorAll('[data-animation]');

/**
 * Aktualisiert die Animation für alle animierbaren Elemente
 * Prüft für jedes Element, ob es im Viewport sichtbar ist
 * und fügt die entsprechende Animation hinzu
 *
 * Wird auch von scroll.js aufgerufen, um Animationen zurückzusetzen
 * wenn zu einem neuen Abschnitt gescrollt wird
 */
function updateFadeInAnimation() {
    // Konvertiert NodeList zu Array und iteriert über jedes Element
    Array.from(animatedElements).forEach(element => {
        const isVisible = isElementInViewport(element);

        // Wenn das Element sichtbar ist, Animation hinzufügen
        if (isVisible) {
            // Setzt die Opacity zurück auf Standardwert
            element.style.opacity = '';
            // Holt den Animationstyp aus dem data-animation Attribut
            const animationType = element.getAttribute('data-animation');
            // Fügt die Animation als CSS-Klasse hinzu
            element.classList.add(animationType);
        }
    });
}

/**
 * Prüft, ob ein Element im sichtbaren Bereich des Viewports ist
 * @param {HTMLElement} element - Das zu prüfende Element
 * @returns {boolean} - true wenn das Element sichtbar ist, sonst false
 *
 * Die Funktion berücksichtigt einen 80px Offset von oben,
 * damit Elemente etwas früher animiert werden und der
 * Benutzer sie bereits sieht, bevor sie vollständig im Viewport sind
 */
function isElementInViewport(element) {
    // Holt die Position und Dimensionen des Elements
    const rect = element.getBoundingClientRect();
    // Holt die Höhe des Viewports (Browserfenster)
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Prüft, ob das Element im Viewport sichtbar ist
    // 80px Offset von oben für bessere Benutzererfahrung
    return (
        rect.top + 80 <= viewportHeight && // Element ist von oben sichtbar
        rect.left >= 0 && // Element ist von links sichtbar
        rect.bottom >= 0 && // Element ist von unten sichtbar
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Element ist von rechts sichtbar
    );
}

/**
 * Initialisiert die Animation für alle Elemente
 * Setzt die grundlegenden CSS-Eigenschaften
 *
 * Wird beim Laden der Seite und beim Navigieren zu
 * neuen Abschnitten aufgerufen
 */
function initializeFadeInAnimation() {
    Array.from(animatedElements).forEach(element => {
        // Setzt die Übergangsdauer für die Animation
        element.style.transitionDuration = '100ms';
        // Setzt die anfängliche Transparenz
        element.style.opacity = '0';
    });
}

// Event Listener für Animation
// Wird ausgeführt, wenn das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {
    initializeFadeInAnimation();
    updateFadeInAnimation();
});

// Weitere Event Listener für verschiedene Szenarien
window.addEventListener('load', updateFadeInAnimation); // Nach vollständigem Laden der Seite
window.addEventListener('scroll', updateFadeInAnimation); // Beim Scrollen
window.addEventListener('resize', updateFadeInAnimation); // Bei Größenänderung des Fensters

// Export der Funktionen für mögliche externe Verwendung
// Wird von scroll.js importiert für koordinierte Animationen
export { updateFadeInAnimation, isElementInViewport, initializeFadeInAnimation };
