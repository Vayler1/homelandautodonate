const storeData = [
  {
    id: "ranks",
    name: "Привілеї",
    icon: "fa-crown",
    items: [
      { name: "Козак (Назавжди)", shortName: "Козак", desc: "Назавжди", price: 115 },
      { name: "Козак (3 місяці)", shortName: "Козак", desc: "3 місяці", price: 69 },
      { name: "Сотник (Назавжди)", shortName: "Сотник", desc: "Назавжди", price: 199 },
      { name: "Сотник (3 місяці)", shortName: "Сотник", desc: "3 місяці", price: 139 },
      { name: "Полковник (Назавжди)", shortName: "Полковник", desc: "Назавжди", price: 459 },
      { name: "Полковник (3 місяці)", shortName: "Полковник", desc: "3 місяці", price: 349 },
      { name: "Гетьман (Назавжди)", shortName: "Гетьман", desc: "Назавжди", price: 859 },
      { name: "Гетьман (3 місяці)", shortName: "Гетьман", desc: "3 місяці", price: 519 },
      { name: "Спонсор (Назавжди)", shortName: "Спонсор", desc: "Назавжди", price: 1719 },
      { name: "Спонсор (3 місяці)", shortName: "Спонсор", desc: "3 місяці", price: 1149 }
    ]
  },
  {
    id: "cases",
    name: "Кейси",
    icon: "fa-box-open",
    items: [
      { name: "Донат кейс", shortName: "Донат кейс", desc: "Випадковий донат", price: 169 },
      { name: "Косметичний кейс (1 шт.)", shortName: "Косметичний кейс", desc: "1 шт.", price: 45 },
      { name: "Косметичний кейс (5 шт.)", shortName: "Косметичний кейс", desc: "5 шт.", price: 209 },
      { name: "Косметичний кейс (10 шт.)", shortName: "Косметичний кейс", desc: "10 шт.", price: 369 },
      { name: "Косметичний кейс (20 шт.)", shortName: "Косметичний кейс", desc: "20 шт.", price: 689 }
    ]
  },
  {
    id: "currency",
    name: "Валюта",
    icon: "fa-coins",
    items: [
      { name: "Кейс з ігровою валютою (1 шт.)", shortName: "Кейс валюти", desc: "1 шт.", price: 149 },
      { name: "Кейс з ігровою валютою (5 шт.)", shortName: "Кейс валюти", desc: "5 шт.", price: 669 },
      { name: "Кейс з ігровою валютою (10 шт.)", shortName: "Кейс валюти", desc: "10 шт.", price: 1179 },
      { name: "Кейс з ігровою валютою (20 шт.)", shortName: "Кейс валюти", desc: "20 шт.", price: 2219 }
    ]
  },
  {
    id: "other",
    name: "Інше",
    icon: "fa-star",
    items: [
      { name: "Преміум Батлпас (1 сезон)", shortName: "Преміум Батлпас", desc: "1 сезон", price: 89 }
    ]
  }
];

// --- СИСТЕМА ПЕРЕКЛАДІВ ---
const translations = {
  uk: {
    backBtn: "На головну",
    motto: "Твоя земля. Твоя історія.", step1: "Введіть ваші дані", step2: "Оберіть товар",
    warning: "<strong>Гравцям Bedrock!</strong> Не забудьте вказати <span>. (крапку)</span> перед ніком!",
    placeholder: "Ваш ігровий нікнейм...", emptyCart: "Оберіть товар, щоб продовжити", selected: "Обрано:", payBtn: "Оплатити", loading: "Створення...",
    disclaimer: "Здійснюючи оплату, ви погоджуєтесь з умовами придбання цифрових товарів. Кошти за придбані товари поверненню не підлягають. З кожної транзакції сплачуються податки до бюджету України 🇺🇦."
  },
  en: {
    backBtn: "Main site",
    motto: "Your land. Your story.", step1: "Enter your details", step2: "Select product",
    warning: "<strong>Bedrock players!</strong> Do not forget to put a <span>. (dot)</span> before your nickname!",
    placeholder: "Your nickname...", emptyCart: "Select a product to continue", selected: "Selected:", payBtn: "Pay", loading: "Creating...",
    disclaimer: "By making a payment, you agree to the terms of purchasing digital goods. All purchases are non-refundable. Taxes from every transaction are paid to the budget of Ukraine 🇺🇦.",
    "Привілеї": "Ranks", "Кейси": "Cases", "Валюта": "Currency", "Інше": "Other",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Forever", "3 місяці": "3 months", "Донат кейс": "Donate Case", "Випадковий донат": "Random donate",
    "Косметичний кейс": "Cosmetic Case", "1 шт.": "1 pc.", "5 шт.": "5 pcs.", "10 шт.": "10 pcs.", "20 шт.": "20 pcs.",
    "Кейс валюти": "Currency Case", "Преміум Батлпас": "Premium Battlepass", "1 сезон": "1 season"
  },
  de: {
    backBtn: "Zur Website",
    motto: "Dein Land. Deine Geschichte.", step1: "Gib deine Daten ein", step2: "Produkt wählen",
    warning: "<strong>Bedrock-Spieler!</strong> Vergiss nicht, einen <span>. (Punkt)</span> vor dem Nicknamen zu setzen!",
    placeholder: "Dein Nickname...", emptyCart: "Wähle ein Produkt aus, um fortzufahren", selected: "Ausgewählt:", payBtn: "Bezahlen", loading: "Erstellen...",
    disclaimer: "Mit der Zahlung stimmst du den Bedingungen für den Kauf digitaler Güter zu. Alle Einkäufe sind nicht erstattungsfähig. Steuern aus jeder Transaktion fließen in den Haushalt der Ukraine 🇺🇦.",
    "Привілеї": "Ränge", "Кейси": "Kisten", "Валюта": "Währung", "Інше": "Sonstiges",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Für immer", "3 місяці": "3 Monate", "Донат кейс": "Donate Kiste", "Випадковий донат": "Zufälliger Donate",
    "Косметичний кейс": "Kosmetische Kiste", "1 шт.": "1 Stk.", "5 шт.": "5 Stk.", "10 шт.": "10 Stk.", "20 шт.": "20 Stk.",
    "Кейс валюти": "Währungskiste", "Преміум Батлпас": "Premium Battlepass", "1 сезон": "1 Saison"
  },
  pl: {
    backBtn: "Na stronę główną",
    motto: "Twoja ziemia. Twoja historia.", step1: "Wpisz swoje dane", step2: "Wybierz produkt",
    warning: "<strong>Gracze Bedrock!</strong> Nie zapomnijcie dodać <span>. (kropki)</span> przed nickiem!",
    placeholder: "Twój nick...", emptyCart: "Wybierz produkt, aby kontynuować", selected: "Wybrano:", payBtn: "Zapłać", loading: "Tworzenie...",
    disclaimer: "Dokonując płatności, akceptujesz warunki zakupu dóbr cyfrowych. Zakupione towary nie podlegają zwrotowi. Podatki z każdej transakcji trafiają do budżetu Ukrainy 🇺🇦.",
    "Привілеї": "Rangi", "Кейси": "Skrzynie", "Валюта": "Waluta", "Інше": "Inne",
    "Козак": "Kozak", "Сотник": "Setnik", "Полковник": "Pułkownik", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Na zawsze", "3 місяці": "3 miesiące", "Донат кейс": "Donate Skrzynia", "Випадковий донат": "Losowy donate",
    "Косметичний кейс": "Skrzynia Kosmetyczna", "1 шт.": "1 szt.", "5 шт.": "5 szt.", "10 шт.": "10 szt.", "20 шт.": "20 szt.",
    "Кейс валюти": "Skrzynia Waluty", "Преміум Батлпас": "Karnet Bojowy", "1 сезон": "1 sezon"
  },
  fr: {
    backBtn: "Site principal",
    motto: "Votre terre. Votre histoire.", step1: "Entrez vos détails", step2: "Sélectionnez le produit",
    warning: "<strong>Joueurs Bedrock!</strong> N'oubliez pas de mettre un <span>. (point)</span> avant votre pseudo !",
    placeholder: "Votre pseudo...", emptyCart: "Sélectionnez un produit pour continuer", selected: "Sélectionné:", payBtn: "Payer", loading: "Création...",
    disclaimer: "En effectuant un paiement, vous acceptez les conditions d'achat de biens numériques. Tous les achats sont non remboursables. Les taxes de chaque transaction vont au budget de l'Ukraine 🇺🇦.",
    "Привілеї": "Grades", "Кейси": "Caisses", "Валюта": "Monnaie", "Інше": "Autre",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Pour toujours", "3 місяці": "3 mois", "Донат кейс": "Caisse Donate", "Випадковий донат": "Don aléatoire",
    "Косметичний кейс": "Caisse Cosmétique", "1 шт.": "1 pc.", "5 шт.": "5 pcs.", "10 шт.": "10 pcs.", "20 шт.": "20 pcs.",
    "Кейс валюти": "Caisse de Monnaie", "Преміум Батлпас": "Battlepass Premium", "1 сезон": "1 saison"
  },
  es: {
    backBtn: "Sitio principal",
    motto: "Tu tierra. Tu historia.", step1: "Ingresa tus datos", step2: "Seleccionar producto",
    warning: "<strong>¡Jugadores de Bedrock!</strong> ¡No olviden poner un <span>. (punto)</span> antes del apodo!",
    placeholder: "Tu apodo...", emptyCart: "Seleccione un producto para continuar", selected: "Seleccionado:", payBtn: "Pagar", loading: "Creando...",
    disclaimer: "Al realizar un pago, aceptas los términos de compra de bienes digitales. Todas las compras no son reembolsables. Los impuestos de cada transacción van al presupuesto de Ucrania 🇺🇦.",
    "Привілеї": "Rangos", "Кейси": "Cajas", "Валюта": "Moneda", "Інше": "Otro",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Patrocinador",
    "Назавжди": "Para siempre", "3 місяці": "3 meses", "Донат кейс": "Caja Donate", "Випадковий донат": "Donación aleatoria",
    "Косметичний кейс": "Caja Cosmética", "1 шт.": "1 ud.", "5 шт.": "5 uds.", "10 шт.": "10 uds.", "20 шт.": "20 uds.",
    "Кейс валюти": "Caja de Moneda", "Преміум Батлпас": "Pase de Batalla", "1 сезон": "1 temporada"
  }
};

let currentLang = 'uk';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ? translations[currentLang][key] : key;
}

function getDonatelloLang(lang) {
  if (lang === 'uk') return 'ua';
  if (lang === 'pl') return 'pl';
  return 'en';
}

// Курси валют
let exchangeRates = {
  en: { symbol: '$', rate: 45.00 },
  de: { symbol: '€', rate: 50.55 },
  fr: { symbol: '€', rate: 50.55 },
  es: { symbol: '€', rate: 50.55 },
  pl: { symbol: 'zł', rate: 11.59 }
};

async function fetchRealRates() {
  try {
    const res = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    const data = await res.json();
    
    const usd = data.find(c => c.cc === 'USD').rate;
    const eur = data.find(c => c.cc === 'EUR').rate;
    const pln = data.find(c => c.cc === 'PLN').rate;

    exchangeRates.en.rate = usd;
    exchangeRates.de.rate = eur;
    exchangeRates.fr.rate = eur;
    exchangeRates.es.rate = eur;
    exchangeRates.pl.rate = pln;
    
    if (currentLang !== 'uk') {
      renderProducts(currentCategory);
      updateCheckoutState();
    }
  } catch (error) {
    console.error("Не вдалося завантажити курси НБУ, використовуються резервні.");
  }
}

let currentCategory = storeData[0].id;
let selectedProduct = null;

const tabsContainer = document.getElementById("categoryTabs");
const gridContainer = document.getElementById("productsGrid");
const nicknameInput = document.getElementById("nickname");
const submitBtn = document.getElementById("submitBtn");
const selectedInfo = document.getElementById("selectedInfo");
const modal = document.getElementById("language-modal");
const currentLangLabel = document.getElementById("currentLangLabel");

function initStore() {
  renderTabs();
  renderProducts(currentCategory);
  updateStaticTexts();
}

function updateStaticTexts() {
  document.getElementById("mottoText").innerText = t("motto");
  document.getElementById("step1Text").innerText = t("step1");
  document.getElementById("warningText").innerHTML = t("warning");
  document.getElementById("nickname").placeholder = t("placeholder");
  document.getElementById("step2Text").innerText = t("step2");
  document.getElementById("payText").innerText = t("payBtn");
  document.getElementById("disclaimerText").innerText = t("disclaimer");
  document.getElementById("backToSiteText").innerText = t("backBtn");
  currentLangLabel.innerText = currentLang.toUpperCase();
  updateCheckoutState();
}

function openLanguageModal() {
  modal.style.display = "flex";
  setTimeout(() => { modal.style.opacity = '1'; }, 10);
}

function setLanguage(lang) {
  currentLang = lang;
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.3s ease';
  setTimeout(() => { modal.style.display = "none"; }, 300);
  initStore();
}

function renderTabs() {
  tabsContainer.innerHTML = "";
  storeData.forEach(category => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${category.id === currentCategory ? "active" : ""}`;
    btn.innerHTML = `<i class="fas ${category.icon}"></i> ${t(category.name)}`;
    btn.onclick = () => {
      currentCategory = category.id;
      renderTabs();
      renderProducts(category.id);
    };
    tabsContainer.appendChild(btn);
  });
}

function getPriceDisplay(price) {
  let display = `${price} ₴`;
  if (currentLang !== 'uk' && exchangeRates[currentLang]) {
    const { symbol, rate } = exchangeRates[currentLang];
    const converted = (price / rate).toFixed(2);
    display += ` <span class="converted-price">(~${converted} ${symbol})</span>`;
  }
  return display;
}

function renderProducts(categoryId) {
  gridContainer.innerHTML = "";
  const category = storeData.find(c => c.id === categoryId);
  
  category.items.forEach(item => {
    const card = document.createElement("div");
    const isSelected = selectedProduct && selectedProduct.name === item.name;
    card.className = `product-card ${isSelected ? "selected" : ""}`;
    
    card.innerHTML = `
      <i class="fas fa-circle-check check-icon"></i>
      <div>
        <div class="product-name">${t(item.shortName)}</div>
        <div class="product-duration">${t(item.desc)}</div>
      </div>
      <div class="product-price">${getPriceDisplay(item.price)}</div>
    `;

    card.onclick = () => selectProduct(item, card);
    gridContainer.appendChild(card);
  });
}

function selectProduct(item, cardElement) {
  selectedProduct = item;
  document.querySelectorAll(".product-card").forEach(c => c.classList.remove("selected"));
  cardElement.classList.add("selected");
  updateCheckoutState();
}

function updateCheckoutState() {
  const nick = nicknameInput.value.trim();
  
  if (selectedProduct) {
    selectedInfo.innerHTML = `
      ${t("selected")} <strong>${t(selectedProduct.shortName)}</strong> 
      <span class="final-price">${getPriceDisplay(selectedProduct.price)}</span>
    `;
  } else {
    selectedInfo.innerHTML = t("emptyCart");
  }

  submitBtn.disabled = !(nick.length > 0 && selectedProduct !== null);
}

nicknameInput.addEventListener("input", updateCheckoutState);

function generateLink() {
  const nickname = nicknameInput.value.trim();
  if (!nickname || !selectedProduct) return;

  submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t("loading")}`;
  submitBtn.disabled = true;

  const params = new URLSearchParams({
    a: selectedProduct.price,
    c: nickname,
    m: selectedProduct.name,
    lang: getDonatelloLang(currentLang) 
  });

  const url = `https://donatello.to/homelandsurvival?${params.toString()}`;
  
  setTimeout(() => {
    window.location.href = url;
  }, 400);
}

// Запуск
initStore();
fetchRealRates();
