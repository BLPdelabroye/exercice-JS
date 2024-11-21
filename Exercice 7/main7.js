// Function that adds two numbers
function addition(param1, param2) {
    return param1 + param2;
}

// Main function for calculating factorial sum
function calculFactorielAvecAddition() {
    // Ask the user to enter a number
    let n = parseInt(prompt("Entrez un nombre, je vais calculer la somme factorielle (1 + 2 + ... + N)"));

    // Verification that the user has entered the correct number
    if (isNaN(n) || n < 1) {
        alert("Veuillez entrer un nombre entier positif !");
        return;
    }

    // Initialize sum to 0
    let somme = 0;

    // Calculate the sum of integers from 1 to N
    for (let i = 1; i <= n; i++) {
        somme = addition(somme, i);
    }

    // Display results in an alert
    alert("Le calcul fait : " + somme);
}