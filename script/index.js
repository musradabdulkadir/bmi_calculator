const calculate = document.getElementById("calculateButton");
const result = document.getElementById("bmiResult");
const category = document.getElementById("category");
const heightInp = document.getElementById("heightInp");
const weightInp = document.getElementById("weightInp");

const hError = document.getElementById("heightError");
const wError = document.getElementById("weightError");

heightInp.addEventListener("input", function () {
  hError.innerText = "";
  wError.innerText = "";
});

weightInp.addEventListener("input", function () {
  hError.innerText = "";
  wError.innerText = "";
});

calculate.addEventListener("click", function () {
  const height = document.getElementById("heightInp").value;
  const weight = document.getElementById("weightInp").value;

  if (height == "") {
    hError.style.color = "red";
    hError.innerText = "Please enter your height";
  }

  if (weight == "") {
    wError.style.color = "red";
    wError.innerText = "Please enter your Weight";
  } else {
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    let actualBmi = bmi.toFixed(2);
    result.innerText = "Your BMI is: " + actualBmi;

    if (actualBmi < 18.5) {
      category.style.color = "orange";
      category.innerText = "Category: Under Weight";
    } else if (actualBmi < 24.9) {
      category.style.color = "green";
      category.innerText = "Category: Normal Weight";
    } else if (actualBmi < 29.9) {
      category.style.color = "orange";
      category.innerText = "Category: Over Weight";
    } else {
      category.style.color = "red";
      category.innerText = "Category: Obese";
    }
  }
});
