const gameData = {
    "mobile-legends": {
        currency: "Diamond",
        prices: {
            86: 20000,
            172: 38000,
            257: 55000,
            514: 105000,
            1000: 200000,
            5000: 950000,
            10000: 1800000
        }
    },
    "free-fire": {
        currency: "Diamond",
        prices: {
            70: 10000,
            140: 19000,
            355: 45000,
            720: 90000,
            1450: 180000,
            5000: 600000,
            10000: 1100000
        }
    },
    "pubg": {
        currency: "UC",
        prices: {
            60: 15000,
            325: 75000,
            660: 145000,
            1800: 350000,
            3850: 700000,
            5000: 900000,
            10000: 1700000
        }
    },
    "valorant": {
        currency: "VP",
        prices: {
            475: 50000,
            1000: 95000,
            2050: 190000,
            3650: 330000,
            5350: 480000,
            10000: 900000
        }
    }
};

const gameCards = document.querySelectorAll(".game-card");
const nominalSelect = document.getElementById("nominal");
const priceDisplay = document.getElementById("price");

let selectedGame = null;

gameCards.forEach(card => {
    card.addEventListener("click", () => {
        selectedGame = card.getAttribute("data-game");
        nominalSelect.innerHTML = "";
        priceDisplay.textContent = "Harga: -";

        const { currency, prices } = gameData[selectedGame];

        for (const [amount, price] of Object.entries(prices)) {
            const option = document.createElement("option");
            option.value = amount;
            option.textContent = `${amount} ${currency}`;
            nominalSelect.appendChild(option);
        }

        nominalSelect.addEventListener("change", () => {
            const selectedAmount = nominalSelect.value;
            priceDisplay.textContent = `Harga: Rp ${prices[selectedAmount].toLocaleString()}`;
        });
    });
});

document.getElementById("topupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selectedGame) {
        alert("Pilih game terlebih dahulu!");
        return;
    }
    alert(`Top up untuk ${selectedGame} berhasil!`);
});
