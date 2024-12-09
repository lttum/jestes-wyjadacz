document.addEventListener('DOMContentLoaded', function() {
    // Po załadowaniu strony, wyświetli się alert powitalny
    alert("Witaj na mojej stronie! Cieszymy się, że tu jesteś.");

    // Obsługa kliknięcia przycisku
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        // Zmiana tekstu w paragrafie po kliknięciu przycisku
        const paragraph = document.getElementById('changeText');
        paragraph.textContent = "Tekst został zmieniony! Brawo, kliknąłeś przycisk!";

        // Zmiana koloru przycisku po kliknięciu
        button.style.backgroundColor = "#2980b9";  // Zmiana koloru na ciemniejszy niebieski
        button.style.color = "#fff";  // Zmiana koloru tekstu na biały
        button.textContent = "Kliknięto!";  // Zmiana tekstu przycisku
    });
});
