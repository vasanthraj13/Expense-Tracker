const form = document.getElementById('tracker-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const transactionName = document.getElementById('transaction-name').value.trim();
  const transactionAmount = parseFloat(document.getElementById('transaction-amount').value);
  const transactionDate = document.getElementById('transaction-date').value;
  const transactionType = document.getElementById('transaction-type').value;
  const paymentMethod = document.getElementById('payment-method').value;

  if (!transactionName || isNaN(transactionAmount) || transactionAmount <= 0 || !transactionDate) {
    alert('Please enter a valid transaction name, amount, and date.');
    return;
  }

  const transaction = {
    name: transactionName,
    amount: transactionAmount,
    type: transactionType,
    date: transactionDate,
    paymentMethod: paymentMethod, 
    timestamp: new Date().toLocaleString(),
  };

  let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

  transactions.push(transaction);

  localStorage.setItem('transactions', JSON.stringify(transactions));

  document.getElementById('transaction-name').value = '';
  document.getElementById('transaction-amount').value = '';
  document.getElementById('transaction-date').value = '';
  document.getElementById('transaction-type').value = 'income';
  document.getElementById('payment-method').value = 'paypal';

  alert('Transaction added successfully!');
});