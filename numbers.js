//Log In Button Click Handler
document.getElementById('login').addEventListener('click',function(){
  document.getElementById('login-area').style.display = 'none';
  document.getElementById('transition').style.display = 'block'
})


////Deposit Button button Click Handler
document.getElementById('deposit').addEventListener('click', function(){
  const depositAmount = document.getElementById('deposit-amount').value;
  const depositNumber = parseFloat(depositAmount);

  updateSpanText('currentDeposit',depositNumber);
  updateSpanText('currentBalance',depositNumber);
  
  document.getElementById('deposit-amount').value = "";
});

  function updateSpanText(id, depositNumber){
  const currentBalance = document.getElementById(id).innerText;
  const currentNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalBalance;
  }

///WithDraw button click handler

document.getElementById('withdraw').addEventListener('click', function(){
  const withdrawAmount = document.getElementById('withdraw-amount').value;
  const withdrawNumber = parseFloat(withdrawAmount);

  updateSpanText('current-withdraw', withdrawNumber)
  updateBalance("currentBalance",withdrawNumber)

document.getElementById('withdraw-amount').value = "";    
})

function updateBalance(id,withdrawNumber){
const currentBalance = document.getElementById(id).innerText;
const balanceAmount = parseFloat(currentBalance);
const totalBalance = balanceAmount - withdrawNumber;  
document.getElementById('currentBalance').innerText = totalBalance;

}
