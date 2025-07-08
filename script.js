const services = {
  srv1: {
    "Преміум Батлпас (1 сезон)": 50,
    "Донат кейс": 120,
    "Козак (Назавжди)": 100,
    "Козак (3 місяці)": 60,
    "Сотник (Назавжди)": 170,
    "Сотник (3 місяці)": 120,
    "Полковник (Назавжди)": 340,
    "Полковник (3 місяці)": 260,
    "Гетьман (Назавжди)": 750,
    "Гетьман (3 місяці)": 450
  },
  srv2: {
    vip: 70,
    ultra: 100
  }
};

const serverSelect = document.getElementById("server");
const serviceSelect = document.getElementById("service");
const nicknameInput = document.getElementById("nickname");
const submitBtn = document.getElementById("submitBtn");

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

updateServiceOptions(); // Початкове завантаження послуг

function generateLink() {
  const server = serverSelect.value;
  const service = serviceSelect.value;
  const nickname = nicknameInput.value.trim();

  if (!nickname) {
    alert("Введіть нікнейм!");
    return;
  }

  const commentRaw = `${server}-${service}-${nickname}`;
  const comment = encodeURIComponent(commentRaw);
  const amount = services[server][service];
  const jarId = "8txe3r4Kxp";

  const url = `https://send.monobank.ua/jar/${jarId}?a=${amount}&t=${comment}`;
  window.location.href = url;
}
