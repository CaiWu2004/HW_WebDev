fedIncTaxRate = [10, 12, 22, 24, 32, 35, 37];

const btn = document.getElementById("taxes");
const output = document.getElementById("results");

btn.onclick = function () {
  money = parseFloat(document.getElementById("income").value);

  let income = parseFloat(document.getElementById("income").value);
  let rate;

  if (income > 0.0 && income <= 9525.0) {
    rate = fedIncTaxRate[0];
    console.log(`The rate your taxed on is: ${rate}%`);
  } else if (income > 9525.0 && income <= 38700.0) {
    rate = fedIncTaxRate[1];
    console.log(`The rate of your income tax is: ${rate}%`);
  } else if (income > 38700.0 && income <= 82500.0) {
    rate = fedIncTaxRate[2];
  } else if (income > 82500.0 && income <= 157500.0) {
    rate = fedIncTaxRate[3];
  } else if (income > 157500.0 && income <= 200000.0) {
    rate = fedIncTaxRate[4];
  } else if (income > 200000.0 && income <= 500000) {
    rate = fedIncTaxRate[5];
  } else if (income > 500000.0) {
    rate = fedIncTaxRate[6];
  } else {
    output.innerHTML = `You Have Enter an Invalid Amount!!!!`;
    return;
  }

  function IRS(income, rate) {
    var tax_income = income * (rate / 100);
    return tax_income;
  }

  output.innerHTML = `Your taxes for this month is $${IRS(income, rate)}`;
};

// const text = document.getElementById("income");
// const btn = document.getElementById("taxes");
// const output = document.getElementById("results");

// function tax() {
//   output.innerHTML = text.value;
// }

// btn.addEventListener("click", tax);

// function calTaxes(income){
//     var tax = income *
// }
