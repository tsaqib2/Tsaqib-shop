// Daftar game beserta harga per 100 diamond
const games = [
    { name: "Mobile Legends", pricePer100: 150 },
    { name: "Free Fire", pricePer100: 140 },
    { name: "PUBG Mobile", pricePer100: 160 },
    { name: "Genshin Impact", pricePer100: 170 },
    { name: "Valorant", pricePer100: 180 }
];

let selectedGame = null;

// Populate daftar game ke HTML
function loadGames() {
    const gameList = document.getElementById("gameList");
    games.forEach((game, index) => {
        let item = document.createElement("div");
        item.className = "game-item";
        item.innerHTML = `
            <img src="images/${game.name.toLowerCase().replace(/ /g, '-')}.png" alt="${game.name}">
            <p>${game.name}</p>
        `;
        item.onclick = () => selectGame(index);
        gameList.appendChild(item);
    });
}

// Populate pilihan diamond sampai 10.000
function loadDiamonds() {
    const diamondSelect = document.getElementById("diamonds");
    for (let i = 100; i <= 10000; i += 100) {
        let option = document.createElement("option");
        option.value = i;
        option.text = `${i} DM`;
        diamondSelect.appendChild(option);
    }
}

// Saat game dipilih
function selectGame(index) {
    selectedGame = games[index];
    document.getElementById("selectedGame").innerText = `Game: ${selectedGame.name}`;
    updatePrice();
}

// Update harga berdasarkan pilihan
function updatePrice() {
    let diamondAmount = parseInt(document.getElementById("diamonds").value);
    if (selectedGame && diamondAmount) {
        let price = (diamondAmount / 100) * selectedGame.pricePer100;
        document.getElementById("price").innerText = `Harga: Rp ${price.toLocaleString("id-ID")}`;
    }
}

// Proses top up
function topUp() {
    let userId = document.getElementById("userId").value;
    let diamondAmount = parseInt(document.getElementById("diamonds").value);

    if (!selectedGame) {
        alert("Silakan pilih game terlebih dahulu!");
        return;
    }
    if (!userId.trim()) {
        alert("Masukkan User ID atau Player ID!");
        return;
    }
    if (!diamondAmount) {
        alert("Pilih jumlah diamond!");
        return;
    }

    alert(
        `✅ Top Up Berhasil!\n` +
        `🎮 Game: ${selectedGame.name}\n` +
        `🆔 User ID: ${userId}\n` +
        `💎 Diamond: ${diamondAmount} DM\n` +
        `💰 ${document.getElementById("price").innerText}`
    );
}

// Load data saat halaman dibuka
window.onload = function () {
    loadGames();
    loadDiamonds();
};
