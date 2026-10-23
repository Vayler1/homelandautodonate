const storeData = [
  {
    id: "ranks",
    name: "Привілеї",
    icon: "fa-crown",
    items: [
      { name: "Козак (Назавжди)", shortName: "Козак", tag: "forever", desc: "Назавжди", icon: "fa-shield-halved", price: 115 },
      { name: "Козак (3 місяці)", shortName: "Козак", tag: "period", desc: "Термін: 3 місяці", icon: "fa-shield-halved", price: 69 },
      { name: "Сотник (Назавжди)", shortName: "Сотник", tag: "forever", desc: "Назавжди", icon: "fa-khanda", price: 199 },
      { name: "Сотник (3 місяці)", shortName: "Сотник", tag: "period", desc: "Термін: 3 місяці", icon: "fa-khanda", price: 139 },
      { name: "Полковник (Назавжди)", shortName: "Полковник", tag: "forever", desc: "Назавжди", icon: "fa-award", price: 459 },
      { name: "Полковник (3 місяці)", shortName: "Полковник", tag: "period", desc: "Термін: 3 місяці", icon: "fa-award", price: 349 },
      { name: "Гетьман (Назавжди)", shortName: "Гетьман", tag: "forever", desc: "Назавжди", icon: "fa-crown", price: 859 },
      { name: "Гетьман (3 місяці)", shortName: "Гетьман", tag: "period", desc: "Термін: 3 місяці", icon: "fa-crown", price: 519 },
      { name: "Спонсор (Назавжди)", shortName: "Спонсор", tag: "forever", desc: "Назавжди", icon: "fa-gem", price: 1719 },
      { name: "Спонсор (3 місяці)", shortName: "Спонсор", tag: "period", desc: "Термін: 3 місяці", icon: "fa-gem", price: 1149 }
    ]
  },
  {
    id: "cases",
    name: "Кейси",
    icon: "fa-box-open",
    items: [
      { name: "Донат кейс", shortName: "Донат кейс", tag: "forever", desc: "Випадковий донат-ранг", icon: "fa-cube", price: 169 },
      { name: "Косметичний кейс (1 шт.)", shortName: "Косметичний кейс", tag: "period", desc: "1 штука", icon: "fa-wand-magic-sparkles", price: 45 },
      { name: "Косметичний кейс (5 шт.)", shortName: "Косметичний кейс", tag: "period", desc: "Вигідний пак: 5 шт.", icon: "fa-wand-magic-sparkles", price: 209 },
      { name: "Косметичний кейс (10 шт.)", shortName: "Косметичний кейс", tag: "period", desc: "Великий пак: 10 шт.", icon: "fa-wand-magic-sparkles", price: 369 },
      { name: "Косметичний кейс (20 шт.)", shortName: "Косметичний кейс", tag: "period", desc: "Максимальний: 20 шт.", icon: "fa-wand-magic-sparkles", price: 689 }
    ]
  },
  {
    id: "currency",
    name: "Валюта",
    icon: "fa-coins",
    items: [
      { name: "Кейс з ігровою валютою (1 шт.)", shortName: "Кейс валюти", tag: "period", desc: "1 штука", icon: "fa-coins", price: 149 },
      { name: "Кейс з ігровою валютою (5 шт.)", shortName: "Кейс валюти", tag: "period", desc: "5 штук", icon: "fa-coins", price: 669 },
      { name: "Кейс з ігровою валютою (10 шт.)", shortName: "Кейс валюти", tag: "period", desc: "10 штук", icon: "fa-coins", price: 1179 },
      { name: "Кейс з ігровою валютою (20 шт.)", shortName: "Кейс валюти", tag: "period", desc: "20 штук", icon: "fa-coins", price: 2219 }
    ]
  },
  {
    id: "other",
    name: "Інше",
    icon: "fa-star",
    items: [
      { name: "Преміум Батлпас (1 сезон)", shortName: "Преміум Батлпас", tag: "forever", desc: "Доступ на весь 1 сезон", icon: "fa-star", price: 89 }
    ]
  }
];

// --- СИСТЕМА ПЕРЕКЛАДІВ ---
const translations = {
  uk: {
    backBtn: "На головну",
    motto: "Твоя земля. Твоя історія.", 
    step1: "Введіть ваш нікнейм", 
    step2: "Оберіть товар",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span>Гравцям <strong>Bedrock</strong> обов'язково ставити <code>.</code> (крапку) перед ніком!</span>",
    placeholder: "Ваш нікнейм...",
    emptyHint: "Оберіть будь-який товар зліва для оплати",
    payBtn: "Оплатити", 
    loading: "Створення посилання...",
    disclaimer: "Здійснюючи оплату, ви погоджуєтесь з правилами сервера. Усі покупки є добровільним внеском на розвиток проекту.",
    orderSummary: "Ваше замовлення",
    forPlayer: "Отримувач:",
    foreverTag: "НАЗАВЖДИ",
    periodTag: "ТИМЧАСОВО"
  },
  en: {
    backBtn: "Main site",
    motto: "Your land. Your story.", 
    step1: "Enter your nickname", 
    step2: "Select product",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span><strong>Bedrock</strong> players must put a <code>.</code> (dot) before their nickname!</span>",
    placeholder: "Your nickname...",
    emptyHint: "Select any product on the left to proceed",
    payBtn: "Proceed to Pay", 
    loading: "Generating link...",
    disclaimer: "By paying, you agree to the server rules. All purchases are considered voluntary donations.",
    orderSummary: "Order Summary",
    forPlayer: "Recipient:",
    foreverTag: "LIFETIME",
    periodTag: "LIMITED",
    "Привілеї": "Ranks", "Кейси": "Cases", "Валюта": "Currency", "Інше": "Other",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Lifetime", "Термін: 3 місяці": "3 Months access", "Донат кейс": "Donate Case", 
    "Випадковий донат-ранг": "Random donate rank", "Косметичний кейс": "Cosmetic Case", 
    "1 штука": "1 pc.", "Вигідний пак: 5 шт.": "Bundle: 5 pcs.", "Великий пак: 10 шт.": "Large: 10 pcs.", "Максимальний: 20 шт.": "Mega: 20 pcs.",
    "Кейс валюти": "Currency Case", "5 штук": "5 pcs.", "10 штук": "10 pcs.", "20 штук": "20 pcs.",
    "Преміум Батлпас": "Premium Battlepass", "Доступ на весь 1 сезон": "Full 1st Season access"
  },
  de: {
    backBtn: "Zur Website",
    motto: "Dein Land. Deine Geschichte.", 
    step1: "Gib deinen Nicknamen ein", 
    step2: "Produkt wählen",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span><strong>Bedrock</strong>-Spieler müssen einen <code>.</code> (Punkt) voranstellen!</span>",
    placeholder: "Dein Nickname...",
    emptyHint: "Wähle links ein Produkt aus, um fortzufahren",
    payBtn: "Bezahlen", 
    loading: "Link wird erstellt...",
    disclaimer: "Mit der Zahlung stimmst du den Serverregeln zu. Käufe sind freiwillige Spenden.",
    orderSummary: "Bestellübersicht",
    forPlayer: "Empfänger:",
    foreverTag: "DAUERHAFT",
    periodTag: "ZEITLICH",
    "Привілеї": "Ränge", "Кейси": "Kisten", "Валюта": "Währung", "Інше": "Sonstiges",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Dauerhaft", "Термін: 3 місяці": "3 Monate Zugriff", "Донат кейс": "Donate Kiste", 
    "Випадковий донат-ранг": "Zufälliger Donate-Rang", "Косметичний кейс": "Kosmetische Kiste",
    "Кейс валюти": "Währungskiste", "Преміум Батлпас": "Premium Battlepass"
  },
  pl: {
    backBtn: "Na stronę główną",
    motto: "Twoja ziemia. Twoja historia.", 
    step1: "Wpisz swój nick", 
    step2: "Wybierz produkt",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span>Gracze <strong>Bedrock</strong> muszą dodać <code>.</code> (kropkę) przed nickiem!</span>",
    placeholder: "Twój nick...",
    emptyHint: "Wybierz produkt z lewej strony, aby kontynuować",
    payBtn: "Zapłać", 
    loading: "Generowanie linku...",
    disclaimer: "Dokonując płatności, akceptujesz regulamin serwera. Zakupy są dobrowolnym wsparciem.",
    orderSummary: "Podsumowanie",
    forPlayer: "Odbiorca:",
    foreverTag: "NA ZAWSZE",
    periodTag: "OKRESOWO",
    "Привілеї": "Rangi", "Кейси": "Skrzynie", "Валюта": "Waluta", "Інше": "Inne",
    "Козак": "Kozak", "Сотник": "Setnik", "Полковник": "Pułkownik", "Гетьман": "Hetman", "Спонсор": "Sponsor"
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

// Курси валют з НБУ
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
    exchangeRates.en.rate = data.find(c => c.cc === 'USD').rate;
    exchangeRates.de.rate = data.find(c => c.cc === 'EUR').rate;
    exchangeRates.fr.rate = data.find(c => c.cc === 'EUR').rate;
    exchangeRates.es.rate = data.find(c => c.cc === 'EUR').rate;
    exchangeRates.pl.rate = data.find(c => c.cc === 'PLN').rate;
    
    if (currentLang !== 'uk') {
      renderProducts(currentCategory);
      updateCheckoutSidebar();
    }
  } catch (e) {
    console.log("Використовуються базові курси валют");
  }
}

let currentCategory = storeData[0].id;
let selectedProduct = null;

const tabsContainer = document.getElementById("categoryTabs");
const gridContainer = document.getElementById("productsGrid");
const nicknameInput = document.getElementById("nickname");
const submitBtn = document.getElementById("submitBtn");
const orderContent = document.getElementById("orderContent");
const totalPriceVal = document.getElementById("totalPriceVal");
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
  document.getElementById("orderSummaryTitle").innerText = t("orderSummary");
  currentLangLabel.innerText = currentLang.toUpperCase();
  updateCheckoutSidebar();
}

function openLanguageModal() { modal.classList.add("open"); }
function setLanguage(lang) {
  currentLang = lang;
  modal.classList.remove("open");
  initStore();
}

function renderTabs() {
  tabsContainer.innerHTML = "";
  storeData.forEach(category => {
    const btn = document.createElement("button");
    btn.className = `category-tab-btn ${category.id === currentCategory ? "active" : ""}`;
    btn.innerHTML = `<i class="fas ${category.icon}"></i> ${t(category.name)}`;
    btn.onclick = () => {
      currentCategory = category.id;
      renderTabs();
      renderProducts(category.id);
    };
    tabsContainer.appendChild(btn);
  });
}

function getConvertedPrice(price) {
  if (currentLang !== 'uk' && exchangeRates[currentLang]) {
    const { symbol, rate } = exchangeRates[currentLang];
    return `(~${(price / rate).toFixed(2)} ${symbol})`;
  }
  return '';
}

function renderProducts(categoryId) {
  gridContainer.innerHTML = "";
  const category = storeData.find(c => c.id === categoryId);
  
  category.items.forEach(item => {
    const isSelected = selectedProduct && selectedProduct.name === item.name;
    const card = document.createElement("div");
    card.className = `item-card ${isSelected ? "selected" : ""}`;
    
    const tagClass = item.tag === 'forever' ? 'tag-forever' : 'tag-period';
    const tagText = item.tag === 'forever' ? t("foreverTag") : t("periodTag");

    card.innerHTML = `
      <div class="item-card-top">
        <div class="item-icon-box"><i class="fa-solid ${item.icon}"></i></div>
        <span class="item-tag ${tagClass}">${tagText}</span>
      </div>
      <div>
        <div class="item-title">${t(item.shortName)}</div>
        <div class="item-desc">${t(item.desc)}</div>
      </div>
      <div class="item-bottom">
        <div class="item-price">${item.price} ₴</div>
        <div class="item-converted">${getConvertedPrice(item.price)}</div>
      </div>
    `;

    card.onclick = () => {
      selectedProduct = item;
      document.querySelectorAll(".item-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      updateCheckoutSidebar();
    };

    gridContainer.appendChild(card);
  });
}

function updateCheckoutSidebar() {
  const nick = nicknameInput.value.trim();

  if (selectedProduct) {
    totalPriceVal.innerText = `${selectedProduct.price} ₴`;
    
    orderContent.innerHTML = `
      <div class="order-selected-box">
        <div class="order-row">
          <span class="order-item-name">${t(selectedProduct.shortName)}</span>
          <span style="color: var(--primary); font-weight:700;">${selectedProduct.price} ₴</span>
        </div>
        <div class="order-row">
          <span class="order-target-nick">${t("forPlayer")} <strong>${nick || "—"}</strong></span>
          <span class="order-converted">${getConvertedPrice(selectedProduct.price)}</span>
        </div>
      </div>
    `;
  } else {
    totalPriceVal.innerText = "0 ₴";
    orderContent.innerHTML = `
      <div class="order-empty">
        <i class="fa-solid fa-basket-shopping"></i>
        <span>${t("emptyHint")}</span>
      </div>
    `;
  }

  submitBtn.disabled = !(nick.length > 0 && selectedProduct !== null);
}

nicknameInput.addEventListener("input", updateCheckoutSidebar);

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

  setTimeout(() => {
    window.location.href = `https://donatello.to/homelandsurvival?${params.toString()}`;
  }, 400);
}

// Запуск
initStore();
fetchRealRates();
