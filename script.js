const semestres = document.querySelectorAll('.semestre');
const infoBox = document.getElementById('infoBox');

semestres.forEach(semestre => {
    semestre.addEventListener('click', () => {
        const info = semestre.getAttribute('data-info');
        infoBox.textContent = info;
        infoBox.hidden = false;
        // Scroll suave para que se vea la info
        infoBox.scrollIntoView({ behavior: 'smooth' });
    });
});
