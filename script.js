document.addEventListener('DOMContentLoaded', function() {

    // --- THEME SWITCHER LOGIC ---
    // (Sama seperti jawaban sebelumnya, salin dan tempel di sini)
    const themeSwitcher = document.getElementById('theme-switcher');
    const html = document.documentElement;
    const themeIcon = themeSwitcher.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-bs-theme', savedTheme);
    if (savedTheme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    themeSwitcher.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            html.setAttribute('data-bs-theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-bs-theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- TYPING TEXT ANIMATION LOGIC ---
    const typingTextElement = document.getElementById('typing-text');
    const textsToType = ["Full-Stack Developer", "UI/UX Enthusiast", "Cloud Engineer", "Cybersecurity Analyst"]; // Ganti dengan peran Anda
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textsToType[textIndex].length) {
            typingTextElement.textContent += textsToType[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingTextElement.textContent = textsToType[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % textsToType.length;
            setTimeout(type, 500);
        }
    }

    type(); // Mulai animasi
});