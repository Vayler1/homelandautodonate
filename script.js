const services = {
  srv1: {
    "Преміум Батлпас (1 сезон)": 75,
    "Донат кейс": 150,
    "Козак (Назавжди)": 100,
    "Козак (3 місяці)": 60,
    "Сотник (Назавжди)": 170,
    "Сотник (3 місяці)": 120,
    "Полковник (Назавжди)": 399,
    "Полковник (3 місяці)": 299,
    "Гетьман (Назавжди)": 750,
    "Гетьман (3 місяці)": 450,
    "Спонсор (Назавжди)": 1499,
    "Спонсор (3 місяці)": 999,
    
    // Косметичні кейси
    "Косметичний кейс (1 шт.)": 40,
    "Косметичний кейс (5 шт.)": 180,
    "Косметичний кейс (10 шт.)": 320,
    "Косметичний кейс (20 шт.)": 600,
    
    // Кейси з ігровою валютою
    "Кейс з ігровою валютою (1 шт.)": 129,
    "Кейс з ігровою валютою (5 шт.)": 580,
    "Кейс з ігровою валютою (10 шт.)": 1030,
    "Кейс з ігровою валютою (20 шт.)": 1935
  }
};

const serverSelect = document.getElementById("server");
const serviceSelect = document.getElementById("service");
const nicknameInput = document.getElementById("nickname");
const submitBtn = document.getElementById("submitBtn");

// --- ФУНКЦІЇ МОДАЛЬНОГО ВІКНА ---
function closeModal() {
  document.getElementById("country-modal").style.display = "none";
}

function redirectToGlobal() {
  window.location.href = "https://homeland-survival.tebex.io/"; 
}
// -------------------------------

function updateServiceOptions() {
  const selectedServer = serverSelect.value;
  const serverServices = services[selectedServer];

  serviceSelect.innerHTML = "";

  for (let [key, price] of Object.entries(serverServices)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${key} — ${price} ₴`;
    serviceSelect.appendChild(option);
  }
}

serverSelect.addEventListener("change", updateServiceOptions);
nicknameInput.addEventListener("input", () => {
  submitBtn.disabled = nicknameInput.value.trim() === "";
});

updateServiceOptions();

function generateLink() {
  const server = serverSelect.value;
  const service = serviceSelect.value;
  const nickname = nicknameInput.value.trim();

  if (!nickname) {
    alert("Введіть нікнейм!");
    return;
  }

  const amount = services[server][service];

  // Якщо буде кілька серверів, краще передавати: `${server} | ${service}`
  const message = service;

  const params = new URLSearchParams({
    a: amount,
    c: nickname,
    m: message
  });

  const url = `https://donatello.to/homelandsurvival?${params.toString()}`;
  window.location.href = url;
}
