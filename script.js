<select id="game">
  <option value="">-- Pilih Game --</option>
  <option value="Mobile Legends">Mobile Legends</option>
  <option value="Free Fire">Free Fire</option>
  <option value="Valorant">Valorant</option>
</select>

<img id="gameLogo" src="" alt="Logo Game" style="max-width:150px;margin-top:10px;">

<select id="diamond">
  <option value="">-- Pilih Diamond --</option>
</select>

<p id="price"></p>

<script>
const gameData = {
  "Mobile Legends": {
    logo: "https://upload.wikimedia.org/wikipedia/en/6/68/Mobile_Legends_Bang_Bang_logo.png",
    diamonds: [
      { amount: 86, price: 20000 },
      { amount: 172, price: 40000 },
      { amount: 344, price: 80000 },
      { amount: 514, price: 120000 },
      { amount: 1000, price: 200000 },
      { amount: 5000, price: 1000000 },
      { amount: 10000, price: 2000000 }
    ]
  },
  "Free Fire": {
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/Free_Fire_Logo.png",
    diamonds: [
      { amount: 100, price: 15000 },
      { amount: 210, price: 30000 },
      { amount: 530, price: 75000 },
      { amount: 1080, price: 150000 },
      { amount: 5600, price: 750000 },
      { amount: 10000, price: 1300000 }
    ]
  },
  "Valorant": {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Valorant_logo_-_pink_color_version.svg",
    diamonds: [
      { amount: 475, price: 50000 },
      { amount: 1000, price: 100000 },
      { amount: 2050, price: 200000 },
      { amount: 5350, price: 500000 },
      { amount: 11000, price: 1000000 }
    ]
  }
};

const gameSelect = document.getElementById('game');
const diamondSelect = document.getElementById('diamond');
const priceText = document.getElementById('price');
const gameLogo = document.getElementById('gameLogo');

gameSelect.addEventListener('change', function() {
  const selectedGame = gameSelect.value;
  diamondSelect.innerHTML = '<option value="">-- Pilih Diamond --</option>';
  priceText.textContent = '';
  
  if (selectedGame && gameData[selectedGame]) {
    // ganti logo
    gameLogo.src = gameData[selectedGame].logo;

    // isi diamond
    gameData[selectedGame].diamonds.forEach(pack => {
      const option = document.createElement('option');
      option.value = pack.price;
      option.textContent = `${pack.amount} Diamond - Rp${pack.price.toLocaleString()}`;
      diamondSelect.appendChild(option);
    });
  } else {
    gameLogo.src = '';
  }
});

diamondSelect.addEventListener('change', function() {
  const price = diamondSelect.value;
  if (price) {
    priceText.textContent = `Harga: Rp${parseInt(price).toLocaleString()}`;
  } else {
    priceText.textContent = '';
  }
});
</script>
