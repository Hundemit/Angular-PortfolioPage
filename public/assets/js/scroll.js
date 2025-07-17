import { toggleMenu } from './menu.js';

/**
 * Funktion zum Scrollen zu einem Element mit Verzögerung
 * @param {string} elementId - Die ID des Elements, zu dem gescrollt werden soll
 */
function scrollToElementWithDelay(elementId) {
    // Schließt das Menü vor dem Scrollen
    toggleMenu();

    // Setzt alle Animationen zurück, die die Klasse 'fadeInAnimationJs' haben
    const animatedElements = document.getElementsByClassName('fadeInAnimationJs');
    for (let element of animatedElements) {
        element.style.opacity = '';
        element.style.paddingTop = '';
    }

    // Scrollt nach 300ms Verzögerung zum gewünschten Element
    // Die Verzögerung ermöglicht ein flüssigeres Scrollen nach dem Menüschließen
    setTimeout(() => {
        document.getElementById(elementId).scrollIntoView();
    }, 300);
}

// Exportiert die scrollToElementWithDelay-Funktion für die Verwendung in anderen Modulen
export { scrollToElementWithDelay };
