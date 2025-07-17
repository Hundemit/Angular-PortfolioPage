// E-Mail-Button Funktionalität
const emailButton = document.getElementById('mailButton');

const emailButtonText = document.getElementById('mailButtonText');
const emailAddress = 'janhindemit1@gmail.com';

emailButton.addEventListener('click', () => {
    emailButton.classList.remove('animate-smooth-bounce');
    void emailButton.offsetWidth; // Force reflow
    emailButton.classList.add('animate-smooth-bounce');

    emailButtonText.textContent = 'Copy!';
    setTimeout(() => {
        emailButtonText.textContent = 'Mail';
    }, 1500);

    var text = 'janhindemit1@gmail.com';
    navigator.clipboard.writeText(text);
});

// Formular-Elemente
const contactFormContainer = document.getElementById('wpforms-78');
const contactFormHeader = document.getElementById('formsHeader');

// Diese Variablen werden in mainfooter.js importiert
export { emailButton, contactFormContainer, contactFormHeader };
