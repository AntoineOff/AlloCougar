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
    popup.style.display = 'none'; // Ferme le popup
    document.body.style.overflow = 'auto'; // Réactive le scroll
});

denyButton.addEventListener('click', () => {
    window.location.href = 'access-denied.html'; // Redirige vers la page d'accès refusé
});

// Gestion du formulaire de connexion
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Réinitialiser le message d'erreur
    loginError.style.display = 'none';
    loginError.textContent = '';

    // Validation simple
    if (email === '' || password === '') {
        loginError.textContent = 'Veuillez remplir tous les champs.';
        loginError.style.display = 'block';
        return;
    }

    // Simulation d'une connexion réussie
    if (email === 'test@allocougar.com' && password === 'password123') {
        alert('Connexion réussie ! Bienvenue sur AlloCougar.');
        // window.location.href = 'dashboard.html';
    } else {
        loginError.textContent = 'Email ou mot de passe incorrect.';
        loginError.style.display = 'block';
    }
});

// Gestion du formulaire d'inscription
const registerForm = document.getElementById('register-form');
const registerError = document.getElementById('register-error');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Réinitialiser le message d'erreur
    registerError.style.display = 'none';
    registerError.textContent = '';

    // Validation
    if (email === '' || password === '' || confirmPassword === '') {
        registerError.textContent = 'Veuillez remplir tous les champs.';
        registerError.style.display = 'block';
        return;
    }

    if (password !== confirmPassword) {
        registerError.textContent = 'Les mots de passe ne correspondent pas.';
        registerError.style.display = 'block';
        return;
    }

    if (password.length < 6) {
        registerError.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        registerError.style.display = 'block';
        return;
    }

    // Simulation d'une inscription réussie (à remplacer par une vraie logique backend)
    alert('Inscription réussie ! Bienvenue sur AlloCougar, ' + email + '.');
    registerForm.reset(); // Réinitialise le formulaire
    // window.location.href = 'dashboard.html'; // Redirection possible
});
