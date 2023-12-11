function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight && height) {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        document.getElementById("result").textContent = bmi;
    } else {
        alert("Please enter both weight and height to calculate BMI.");
    }
}
