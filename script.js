function getBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let BMI = (weight * 703)/(height * height);
    BMI = BMI.toFixed(3);
    document.getElementById('output').innerHTML = output(BMI);
}

function output(BMI) {
    let string = "Your BMI: " + BMI;
    return string;
}

document.getElementById('calculate').addEventListener('click', getBMI);
