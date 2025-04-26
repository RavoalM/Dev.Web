const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const buttonImage = toggleButton.querySelector('img');

document.getElementById("background-music").volume = 0.100;
// Garante que começa no modo escuro
body.classList.add('dark-mode');

function toggleButtonImage() {
    if (body.classList.contains('light-mode')) {
        buttonImage.src = 'Assets/img/Dark-Mode.png'; 
    } else {
        buttonImage.src = 'Assets/img/Light-Mode.png'; 
    }
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    toggleButtonImage();
});

toggleButtonImage();