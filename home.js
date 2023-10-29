function openPopup() {
    document.getElementById('walletPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('walletPopup').style.display = 'none';
}

function selectWallet() {
    var selectedOption = document.querySelector('input[name="walletOption"]:checked').value;
    alert("You selected: " + selectedOption);
    closePopup();
}

document.getElementById('connectWalletBtn').addEventListener('click', openPopup);
