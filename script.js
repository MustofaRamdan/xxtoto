document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('casino-card');

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
