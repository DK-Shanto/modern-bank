document.getElementById('deposit-button').addEventListener('click', function () {
    const currentDepositAmount = document.getElementById('deposit-input').value;
    const oldDepositAmount = document.getElementById('old-amount').innerText;
    const newDepositAmount = parseFloat(currentDepositAmount) + parseFloat(oldDepositAmount);
    document.getElementById('old-amount').innerText = newDepositAmount;
    const oldBalanceAmount = parseFloat(document.getElementById('old-balance').innerText);
    const newBalanceAmount = oldBalanceAmount + parseFloat(currentDepositAmount);
    document.getElementById('old-balance').innerText = newBalanceAmount;
    document.getElementById('deposit-input').value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const currentWithdrawAmount = document.getElementById('withdraw-input').value;
    const oldWithdrawAmount = document.getElementById('old-withdraw').innerText;
    const newWithdrawAmount = parseFloat(currentWithdrawAmount) + parseFloat(oldWithdrawAmount);
    document.getElementById('old-withdraw').innerText = newWithdrawAmount;
    const oldBalanceAmount = parseFloat(document.getElementById('old-balance').innerText);
    const newBalanceAmount = oldBalanceAmount - parseFloat(currentWithdrawAmount);
    document.getElementById('old-balance').innerText = newBalanceAmount;
    document.getElementById('withdraw-input').value = '';
})