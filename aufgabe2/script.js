// Menu 
document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navigation-menu').innerHTML = data
        })
        .catch(error => {
            console.error('Fehler beim Laden des Menüs:', error)
        })
}) 
