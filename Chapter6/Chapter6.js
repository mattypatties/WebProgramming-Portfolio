// Function to calculate the total petrol cost
function PetrolCalculator(valNum) {
        // Convert input value to a floating-point number
        valNum = parseFloat(valNum);
        // Get the element where total cost will be displayed
        const totalCostDisplay = document.getElementById("totalCost");
        if (!isNaN(valNum)) {
            // Calculate cost and update the display
            totalCostDisplay.textContent = `Total Cost: $${(valNum * 1.72).toFixed(2)}`;
        } else {
            // If input is invalid, display 0.00
            totalCostDisplay.textContent = `Total Cost: $0.00`;
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const calculateButton = document.getElementById('calculateButton');// Get the calculate button element
        const litersInput = document.getElementById('Liters');// Get the input field where user enters liters

        calculateButton.addEventListener('click', function() {
            PetrolCalculator(litersInput.value);// Call PetrolCalculator with the entered liters value
        });
    });
