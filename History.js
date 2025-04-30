window.onload = function () {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  const tableBody = document.querySelector("#history-table");
  const totalAmountDisplay = document.getElementById("total-amount");
  const totalTransactionsDisplay = document.getElementById("total-transactions");
  const clearHistoryBtn = document.getElementById("clear-history");

  if (!tableBody || !totalAmountDisplay || !totalTransactionsDisplay) {
    console.error("Required elements not found in the DOM.");
    return;
  }

  if (transactions.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-gray-500 py-4">
          No transactions available.
        </td>
      </tr>`;
    totalAmountDisplay.textContent = "0.00";
    totalTransactionsDisplay.textContent = "0";
  } else {
    let totalAmount = 0;

    transactions.forEach((transaction) => {
      let amount = parseFloat(transaction.amount); // Convert to number
      totalAmount += amount;

      const row = document.createElement("tr");
      row.classList.add("table-row", "border-b");
      row.innerHTML = `
        <td class="px-6 py-4">${transaction.date}</td>
        <td class="px-6 py-4">${transaction.name}</td>
        <td class="px-6 py-4">$${amount.toFixed(2)}</td>
        <td class="px-6 py-4">${transaction.type}</td>
        <td class="px-6 py-4">${transaction.method}</td>
      `;
      tableBody.appendChild(row);
    });

    // Update total amount and transaction count
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
    totalTransactionsDisplay.textContent = transactions.length;
  }

  // Clear history button with confirmation
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to clear all transaction history?")) {
        localStorage.removeItem("transactions");
        alert("Transaction history cleared!");
        window.location.reload();
      }
    });
  }
};
