function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check if the body has a 'dark' class
    const isDarkMode = body.classList.contains('dark');

    // Toggle the theme
    if (isDarkMode) {
        body.classList.remove('dark');
        themeToggle.textContent = 'Dark Theme : On';
    } else {
        body.classList.add('dark');
        themeToggle.textContent = 'Light Theme : Off';
    }
}
