// Gestion des onglets
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Retirer la classe "active" de tous les liens et contenus
        tabLinks.forEach(l => l.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Ajouter la classe "active" au lien cliqué et au contenu correspondant
        link.classList.add('active');
        const tabId = link.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Gestion du popup de vérification d'âge
const popup = document.getElementById('age-verification');
const confirmButton = document.getElementById('confirm-age');
const denyButton = document.getElementById('deny-age');

confirmButton.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Réactive le scroll
});

denyButton.addEventListener('click', () => {
    alert('Désolé, vous devez avoir 18 ans ou plus pour accéder à ce site.');
    window.location.href = 'https://www.google.com'; // Redirige vers une autre page
});
