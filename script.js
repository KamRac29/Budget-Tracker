class Budget {
  constructor() {
    this.balance = 0;
    this.expenses = [];
    this.incomes = [];
    this.incomeDescriptions = [];
    this.expensesDescriptions = [];
    this.incomeTotal = 0;
    this.expenseTotal = 0;
  }
  addIncome(description, amount) {
    this.incomes.push(amount);
    this.balance += amount;
    this.incomeDescriptions.push(description);
    this.incomeTotal += amount;
  }
  addExpense(description, amount) {
    this.expenses.push(amount);
    this.balance -= amount;
    this.expensesDescriptions.push(description);
    this.expenseTotal -= amount;
  }

  totalBudget() {
    return this.balance;
  }
  totalIncome() {
    return this.incomeTotal;
  }
  totalExpense() {
    return this.expenseTotal;
  }
  deleteIncome(amount){
    this.incomeTotal -= amount;
    this.balance -= amount;

  }
  deleteExpense(amount){
    this.expenseTotal += amount;
    this.balance += amount;
  }

}


const newBudget = new Budget();
newBudget.addIncome("Mcdonalds", 1500);
newBudget.addIncome("Wendys", 1500);
newBudget.addExpense("rent", 1500);
console.log(newBudget.totalBudget());

const finalBudget = new Budget();

// Created a class called Budget with a contructor.
// included the total budget amount with an integer of 0
// set expenses and incomes to an array because I am going to add values to incomes and expense and keep track of them
function validateInput() {
  let amount = document.querySelector("#amount").value;
  amount = Number(amount);
  let expenseDescription = document.querySelector("#expenseDescription").value;
  let type = document.querySelector("#type").value;
  if (amount == "") {
    alert("Please fill out amount");
    return;
  } else if (amount < 0) {
    alert("Please enter positive amount");
  } else if (expenseDescription == "") {
    alert("Please fill out expense description");
    return;
  }

  let table = document.getElementById("table");
  let row = table.insertRow(1);
  let rowName = row.insertCell(0);
  let rowAmount = row.insertCell(1);
  let rowType = row.insertCell(2);
  let rowDelete = row.insertCell(3);
  rowName.innerHTML = expenseDescription;
  rowAmount.innerHTML = amount;
  rowType.innerHTML = type;
  rowDelete.innerHTML = `<button id='delete' onclick='deleteRow(${row.rowIndex},${rowType},${rowAmount})'>X</button>`;

  if (type == "Income") {
    finalBudget.addIncome(expenseDescription, amount);
  } else if (type == "Expense") {
    finalBudget.addExpense(expenseDescription, amount);
  }
  document.getElementById("balance").innerHTML = finalBudget.totalBudget();
  document.getElementById("totalIncome").innerHTML=finalBudget.totalIncome();
  document.getElementById("totalExpenses").innerHTML=finalBudget.totalExpense();
}
function deleteRow(rowIndex, rowType, rowAmount){
    if ( rowType == "Income"){
        finalBudget.deleteIncome(rowAmount);
        document.getElementById("totalIncome").innerHTML=finalBudget.totalIncome();
    }
    else if (rowType == "Expense"){
        finalBudget.deleteExpense(rowAmount);
    }
    document.getElementById("balance").innerHTML = finalBudget.totalBudget();
    document.getElementById("table").deleteRow(rowIndex);gi

}