function updateTime() {
    fetch('/current_time')  // Solicita la hora actual al servidor
        .then(response => response.json())
        .then(data => {
            document.getElementById('time-display').textContent = data.time; // Actualiza el contenido del elemento
        });
}

setInterval(updateTime, 1000); // Actualiza cada segundo
updateTime(); // Llama a la funciÃ³n inmediatamente para mostrar la hora al cargar

document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    const menuOptions = document.getElementById('menu-options');
    const form = document.getElementById('menu-form');

    dateInput.addEventListener('change', function() {
        // Aquí simularemos la carga de opciones de menú
        // En una aplicación real, harías una petición al servidor
        const options = [
            'Opción 1: Pollo al horno con papas',
            'Opción 2: Pasta con salsa boloñesa',
            'Opción 3: Ensalada César con pollo'
        ];

        menuOptions.innerHTML = options.map(option => `<div><input type="radio" name="menu" value="${option}"> ${option}</div>`).join('');
        menuOptions.style.display = 'block';
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedDate = dateInput.value;
        const selectedMenu = document.querySelector('input[name="menu"]:checked');

        if (selectedMenu) {
            alert(`Has seleccionado para el ${selectedDate}: ${selectedMenu.value}`);
        } else {
            alert('Por favor, selecciona una opción de menú.');
        }
    });
});