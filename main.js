      //  Examine the document object //
//
// console.dir(document);
// console.log(document.domain);

// can manipulate the DOM using JS, for example
// console.log(document.title)
// document.title = 123;

      // GET ELEMENT BY ID //
// let loanAmount = document.getElementById('loan_amount')
// console.log(loanAmount);
// loanAmount.textContent = "Hello";
// loanAmount.innerText = "Goodbye";

// let hello = document.getElementById('hello');
// hello.innerHTML = "<h3>Hello</h3>"

// let title = document.getElementById('title');
// title.style.borderBottom = "solid 2px black";


    // GET ELEMENTS BY CLASS //
// let row = document.getElementsByClassName('row');

// row.style.backgroundColor = "yellow"; // will return an error. Need to use a for loop

// for (let i = 0; i < row.length; i++) {
//   row[i].style.backgroundColor = "#f4f4f4";
// }


      // QUERY SELECTOR //
// let submitButton = document.querySelector("#button");
// submitButton.innerText = "hello";

// let row = document.querySelector(".row:nth-child(1)");
// row.style.color = "coral";


    // QUERY SELECTOR ALL //
// let oddRow = document.querySelectorAll(".row:nth-child(odd)");
// let evenRow = document.querySelectorAll(".row:nth-child(even)");
//
// for (let i = 0; i < oddRow.length; i++) {
//   oddRow[i].style.backgroundColor = "#f4f4f4";
//   evenRow[i].style.backgroundColor = "#ccc";
// }
let loanAmount = document.querySelector("#loan_amount").value;
let interestRate = document.querySelector("#interest_rate").value;
let monthsToPay = document.querySelector("#months_to_pay").value;

function computeLoan() {
  let loanAmount = document.querySelector("#loan_amount").value;
  let interestRate = document.querySelector("#interest_rate").value;
  let monthsToPay = document.querySelector("#months_to_pay").value;


  const interest = (loanAmount * (interestRate * 0.01)) / monthsToPay;
  let payment = ((loanAmount / monthsToPay) + interest).toFixed(2);

  document.querySelector("#payment").innerHTML = `Monthly Payment With Interest = ${payment}`;


  // Total amount including Interest //
  let totalAmount = payment * monthsToPay;
  document.querySelector("#withInterest").innerHTML = `Total Payment With Interest = ${totalAmount}`;

  // Total Interest Payed //
  let totalInterest = (totalAmount - loanAmount).toFixed(2);
  document.querySelector("#total_interest").innerHTML = `Total Amount of Interest Payed = ${totalInterest}`;
}




document.getElementById("button").onmouseover = function mouseOver() {
  let loanAmount = document.querySelector("#loan_amount").value;
  let interestRate = document.querySelector("#interest_rate").value;
  let monthsToPay = document.querySelector("#months_to_pay").value;

  if (loanAmount > 10 && interestRate > 0 && monthsToPay > 0) {
      button.style.backgroundColor = "green";
  } else if (loanAmount == false || interestRate == false || monthsToPay == false) {
    button.style.backgroundColor = "red";
  } else {
    button.style.backgroundColor = "#343a40";
  }
}
document.getElementById("button").onmouseout = function mouseOut() {
  let loanAmount = document.querySelector("#loan_amount").value;
  let interestRate = document.querySelector("#interest_rate").value;
  let monthsToPay = document.querySelector("#months_to_pay").value;

  if (loanAmount == true && interestRate == true && monthsToPay == true) {
      button.style.backgroundColor = "#343a40";
  } else if (loanAmount == false || interestRate == false || monthsToPay == false) {
      button.style.backgroundColor = "#343a40";
  } else {
    button.style.backgroundColor = "#343a40";
  }
}
