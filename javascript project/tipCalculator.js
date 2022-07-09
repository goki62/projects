function calculate() {
  var input1 = document.querySelector(".form-control1");
  var billValue = Number(input1.value);

  var input2 = document.querySelector(".form-control2");
  var tipValue = Number(input2.value);

  var tip = (billValue / 100) * tipValue;
  var totalBill = billValue + tip;

  var hq = document.querySelectorAll("h2")[3];
  hq.innerText = "your tip is " + tip + "$";
  var hqq = document.querySelectorAll("h2")[4];
  hqq.innerText = "your total bill with tip is " + totalBill + "$";
}
