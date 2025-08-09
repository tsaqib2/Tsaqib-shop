let selectedGame = null;
let diamondPrices = {
    "Mobile Legends": 1500,
    "Free Fire": 1400,
    "PUBG Mobile": 2000,
    "Genshin Impact": 2500
};

function selectGame(gameName) {
    selectedGame = gameName;
    document.getElementById('selectedGame').textContent = gameName;
    document.getElementById('gameSelection').style.display = 'none';
    document.getElementById('topupSection').style.display = 'block';
    updatePrice();
}

function updatePrice() {
    if (!selectedGame) return;

    let diamondAmount = parseInt(document.getElementById('diamondAmount').value);
    let pricePer100 = diamondPrices[selectedGame] || 0;
    let totalPrice = (diamondAmount / 100) * pricePer100;

    document.getElementById('priceDisplay').textContent = formatRupiah(totalPrice);
}

function formatRupiah(angka) {
    return 'Rp ' + angka.toLocaleString('id-ID');
}

function payNow() {
    let userId = document.getElementById('userId').value.trim();
    let diamondAmount = parseInt(document.getElementById('diamondAmount').value);

    if (!selectedGame) {
        alert('Silakan pilih game terlebih dahulu.');
        return;
    }
    if (!userId) {
        alert('Silakan masukkan ID pengguna.');
        return;
    }
    if (!diamondAmount || diamondAmount <= 0) {
        alert('Silakan pilih jumlah diamond.');
        return;
    }

    alert(`Pembayaran untuk ${selectedGame} (${diamondAmount} DM) berhasil!\nID: ${userId}\nTotal: ${document.getElementById('priceDisplay').textContent}`);
}
