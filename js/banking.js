
function userInput(userInputValue) {
    const currentUserAmount = document.getElementById(userInputValue);
    const currentUserAmountFloat = parseFloat(currentUserAmount.value);
    currentUserAmount.value = '';
    return currentUserAmountFloat;
}

function oldBalanceUpdate(oldAmountId, currentDepositAmount) {
    const oldDepositAmount = document.getElementById(oldAmountId);
    const oldDepositAmountFloat = parseFloat(oldDepositAmount.innerText);
    const newDepositAmount = currentDepositAmount + oldDepositAmountFloat;
    oldDepositAmount.innerText = newDepositAmount;
}

function currentBalance() {
    //debugger;
    const oldBalance = document.getElementById('old-balance');
    const oldBalanceAmountGet = parseFloat(oldBalance.innerText);
    return oldBalanceAmountGet;
}

function newBalanceUpdate(currentBalanceAdded, isAdd) {
    const oldBalance = document.getElementById('old-balance');
    const oldBalanceAmount = currentBalance();
    if (isAdd == true) {
        oldBalance.innerText = oldBalanceAmount + currentBalanceAdded;
    }
    else {
        oldBalance.innerText = oldBalanceAmount - currentBalanceAdded;
    }
    //oldBalance.innerText = newBalance;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // const currentDepositAmount = document.getElementById('deposit-input').value;
    const currentDepositAmount = userInput('deposit-input');
    if (currentDepositAmount > 0) {
        oldBalanceUpdate('old-amount', currentDepositAmount);
        newBalanceUpdate(currentDepositAmount, true);
    }
    // const oldDepositAmount = document.getElementById('old-amount').innerText;
    // const newDepositAmount = currentDepositAmount + parseFloat(oldDepositAmount);
    // document.getElementById('old-amount').innerText = newDepositAmount;
    // const oldBalanceAmount = parseFloat(document.getElementById('old-balance').innerText);
    // const newBalanceAmount = oldBalanceAmount + parseFloat(currentDepositAmount);
    // document.getElementById('old-balance').innerText = newBalanceAmount;
    // document.getElementById('deposit-input').value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const currentWithdrawAmount = userInput('withdraw-input');
    // const oldWithdrawAmount = document.getElementById('old-withdraw').innerText;
    // const newWithdrawAmount = currentWithdrawAmount + parseFloat(oldWithdrawAmount);
    // document.getElementById('old-withdraw').innerText = newWithdrawAmount;
    const oldBalanceAmountFound = currentBalance();
    if (currentWithdrawAmount > 0 && oldBalanceAmountFound > currentWithdrawAmount) {
        oldBalanceUpdate('old-withdraw', currentWithdrawAmount);
        newBalanceUpdate(currentWithdrawAmount, false);
    }
    // const oldBalanceAmount = parseFloat(document.getElementById('old-balance').innerText);
    // const newBalanceAmount = oldBalanceAmount - parseFloat(currentWithdrawAmount);
    // document.getElementById('old-balance').innerText = newBalanceAmount;
    // document.getElementById('withdraw-input').value = '';
})