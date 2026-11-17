const catalogData = {
  survival: [
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
        { name: "Косметичний кейс (1 шт.)", shortName: "Косметичний кейс", tag: "forever", desc: "1 шт. (Назавжди)", icon: "fa-wand-magic-sparkles", price: 45 },
        { name: "Косметичний кейс (5 шт.)", shortName: "Косметичний кейс", tag: "forever", desc: "5 шт.", icon: "fa-wand-magic-sparkles", price: 209 },
        { name: "Косметичний кейс (10 шт.)", shortName: "Косметичний кейс", tag: "forever", desc: "10 шт.", icon: "fa-wand-magic-sparkles", price: 369 },
        { name: "Косметичний кейс (20 шт.)", shortName: "Косметичний кейс", tag: "forever", desc: "20 шт.", icon: "fa-wand-magic-sparkles", price: 689 }
      ]
    },
    {
      id: "currency",
      name: "Валюта",
      icon: "fa-coins",
      items: [
        { name: "Кейс з ігровою валютою (1 шт.)", shortName: "Кейс валюти", tag: "wipe", desc: "1 шт. (до вайпу)", icon: "fa-coins", price: 149 },
        { name: "Кейс з ігровою валютою (5 шт.)", shortName: "Кейс валюти", tag: "wipe", desc: "5 шт. (до вайпу)", icon: "fa-coins", price: 669 },
        { name: "Кейс з ігровою валютою (10 шт.)", shortName: "Кейс валюти", tag: "wipe", desc: "10 шт. (до вайпу)", icon: "fa-coins", price: 1179 },
        { name: "Кейс з ігровою валютою (20 шт.)", shortName: "Кейс валюти", tag: "wipe", desc: "20 шт. (до вайпу)", icon: "fa-coins", price: 2219 }
      ]
    },
    {
      id: "other",
      name: "Інше",
      icon: "fa-star",
      items: [
        { name: "Преміум Батлпас (1 сезон)", shortName: "Преміум Батлпас", tag: "period", desc: "Доступ на 1 сезон", icon: "fa-star", price: 119 }
      ]
    }
  ],
  grief: [
    {
      id: "ranks",
      name: "Привілеї",
      icon: "fa-crown",
      items: [
        { name: "Джура (1 місяць)", shortName: "Джура", tag: "period", desc: "Термін: 1 місяць", icon: "fa-shield", price: 49 },
        { name: "Джура (Назавжди)", shortName: "Джура", tag: "forever", desc: "Назавжди", icon: "fa-shield", price: 109 },
        { name: "Пластун (1 місяць)", shortName: "Пластун", tag: "period", desc: "Термін: 1 місяць", icon: "fa-shield-halved", price: 89 },
        { name: "Пластун (Назавжди)", shortName: "Пластун", tag: "forever", desc: "Назавжди", icon: "fa-shield-halved", price: 199 },
        { name: "Характерник (1 місяць)", shortName: "Характерник", tag: "period", desc: "Термін: 1 місяць", icon: "fa-khanda", price: 169 },
        { name: "Характерник (Назавжди)", shortName: "Характерник", tag: "forever", desc: "Назавжди", icon: "fa-khanda", price: 379 },
        { name: "Отаман (1 місяць)", shortName: "Отаман", tag: "period", desc: "Термін: 1 місяць", icon: "fa-award", price: 299 },
        { name: "Отаман (Назавжди)", shortName: "Отаман", tag: "forever", desc: "Назавжди", icon: "fa-award", price: 649 },
        { name: "Воєвода (1 місяць)", shortName: "Воєвода", tag: "period", desc: "Термін: 1 місяць", icon: "fa-crown", price: 499 },
        { name: "Воєвода (Назавжди)", shortName: "Воєвода", tag: "forever", desc: "Назавжди", icon: "fa-crown", price: 1099 }
      ]
    },
    {
      id: "cases_other",
      name: "Кейси та Пропуски",
      icon: "fa-box-open",
      items: [
        { name: "Донат-кейс", shortName: "Донат-кейс", tag: "forever", desc: "Випадковий донат назавжди", icon: "fa-cube", price: 129 },
        { name: "Premium Battlepass (1 сезон)", shortName: "Premium Battlepass", tag: "period", desc: "Доступ на 1 сезон (1 міс.)", icon: "fa-star", price: 109 }
      ]
    }
  ]
};

const translations = {
  uk: {
    backBtn: "На головну",
    step1: "Вкажіть ваш нікнейм",
    step1Desc: "Товар буде автоматично виданий на цей ігровий обліковий запис",
    step2: "Виберіть товар",
    step2Desc: "Оберіть послугу з каталогу обраного сервера",
    warning: "<i class='fa-solid fa-circle-info'></i> <span>Гравцям <strong>Bedrock</strong> обов'язково вказувати крапку <code>.</code> перед нікнеймом.</span>",
    placeholder: "Ваш нікнейм...",
    orderSummary: "Деталі замовлення",
    emptyHint: "Оберіть товар для оплати",
    totalLabel: "До сплати:",
    payBtn: "Оплатити через Donatello",
    loading: "Створення посилання...",
    recipient: "Нікнейм:",
    serverLabel: "Сервер:",
    foreverTag: "НАЗАВЖДИ",
    periodTag: "ТЕРМІН",
    wipeTag: "ДО ВАЙПУ"
  },
  en: {
    backBtn: "Main site",
    step1: "Enter your nickname",
    step1Desc: "The item will be automatically credited to this in-game account",
    step2: "Select product",
    step2Desc: "Choose a service from the catalog of the selected server",
    warning: "<i class='fa-solid fa-circle-info'></i> <span><strong>Bedrock</strong> players must include a dot <code>.</code> before nickname.</span>",
    placeholder: "Your nickname...",
    orderSummary: "Order Details",
    emptyHint: "Select a product to continue",
    totalLabel: "Total:",
    payBtn: "Pay via Donatello",
    loading: "Generating link...",
    recipient: "Nickname:",
    serverLabel: "Server:",
    foreverTag: "PERMANENT",
    periodTag: "PERIOD",
    wipeTag: "TILL WIPE",
    "Привілеї": "Ranks", "Кейси": "Cases", "Валюта": "Currency", "Інше": "Other", "Кейси та Пропуски": "Cases & Passes"
  }
};

let currentLang = 'uk';
let currentServer = 'survival';
let currentCategory = 'ranks';
let selectedProduct = null;

let exchangeRates = {
  en: { symbol: '$', rate: 41.80 },
  de: { symbol: '€', rate: 45.20 },
  pl: { symbol: 'zł', rate: 10.50 }
};

function t(key) {
  if (translations[currentLang] && translations[currentLang][key]) return translations[currentLang][key];
  if (translations.uk[key]) return translations.uk[key];
  return key;
}

function switchServer(srv) {
  currentServer = srv;
  document.getElementById("btn-server-survival").classList.toggle("active", srv === 'survival');
  document.getElementById("btn-server-grief").classList.toggle("active", srv === 'grief');
  
  selectedProduct = null;
  currentCategory = catalogData[currentServer][0].id;
  renderTabs();
  renderProducts();
  updateCheckoutSidebar();
}

function renderTabs() {
  const container = document.getElementById("categoryTabs");
  container.innerHTML = "";
  const categories = catalogData[currentServer];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `category-tab-btn ${cat.id === currentCategory ? "active" : ""}`;
    btn.innerHTML = `<i class="fa-solid ${cat.icon}"></i> <span>${t(cat.name)}</span>`;
    btn.onclick = () => {
      currentCategory = cat.id;
      renderTabs();
      renderProducts();
    };
    container.appendChild(btn);
  });
}

function getConvertedPrice(price) {
  if (currentLang !== 'uk' && exchangeRates[currentLang]) {
    const { symbol, rate } = exchangeRates[currentLang];
    return `(~${(price / rate).toFixed(2)} ${symbol})`;
  }
  return '';
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";
  const cat = catalogData[currentServer].find(c => c.id === currentCategory);
  if (!cat) return;

  cat.items.forEach(item => {
    const card = document.createElement("div");
    const isSelected = selectedProduct && selectedProduct.name === item.name;
    card.className = `item-card ${isSelected ? "selected" : ""}`;

    let tagClass = "tag-forever";
    let tagKey = "foreverTag";
    if (item.tag === "period") { tagClass = "tag-period"; tagKey = "periodTag"; }
    else if (item.tag === "wipe") { tagClass = "tag-wipe"; tagKey = "wipeTag"; }

    card.innerHTML = `
      <div class="item-card-top">
        <div class="item-icon-box"><i class="fa-solid ${item.icon}"></i></div>
        <span class="item-tag ${tagClass}">${t(tagKey)}</span>
      </div>
      <div>
        <div class="item-title">${item.shortName}</div>
        <div class="item-desc">${item.desc}</div>
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

    grid.appendChild(card);
  });
}

function updateCheckoutSidebar() {
  const nick = document.getElementById("nickname").value.trim();
  const totalPriceVal = document.getElementById("totalPriceVal");
  const orderContent = document.getElementById("orderContent");
  const submitBtn = document.getElementById("submitBtn");

  if (selectedProduct) {
    totalPriceVal.innerText = `${selectedProduct.price} ₴`;
    orderContent.innerHTML = `
      <div class="order-selected-box">
        <div class="order-row">
          <strong>${selectedProduct.name}</strong>
          <span>${selectedProduct.price} ₴</span>
        </div>
        <div class="order-row">
          <span>${t("serverLabel")}</span>
          <span style="text-transform: capitalize; font-weight:600; color:var(--primary);">${currentServer}</span>
        </div>
        <div class="order-row">
          <span>${t("recipient")}</span>
          <span>${nick || "—"}</span>
        </div>
      </div>
    `;
    submitBtn.disabled = nick.length === 0;
  } else {
    totalPriceVal.innerText = "0 ₴";
    orderContent.innerHTML = `<div class="order-empty"><span>${t("emptyHint")}</span></div>`;
    submitBtn.disabled = true;
  }
}

document.getElementById("nickname").addEventListener("input", updateCheckoutSidebar);

function generateLink() {
  const nick = document.getElementById("nickname").value.trim();
  if (!nick || !selectedProduct) return;

  const btn = document.getElementById("submitBtn");
  btn.innerText = t("loading");
  btn.disabled = true;

  // ДОДАЄМО МІТКУ СЕРВЕРА В КОМЕНТАР: [grief] Товар або [survival] Товар
  const serverTaggedMessage = `[${currentServer}] ${selectedProduct.name}`;

  const params = new URLSearchParams({
    a: selectedProduct.price,
    c: nick,
    m: serverTaggedMessage,
    lang: currentLang === 'uk' ? 'ua' : 'en'
  });

  setTimeout(() => {
    window.location.href = `https://donatello.to/homelandsurvival?${params.toString()}`;
  }, 250);
}

function openLanguageModal() { document.getElementById("language-modal").classList.add("open"); }
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("language-modal").classList.remove("open");
  document.getElementById("currentLangLabel").innerText = lang.toUpperCase();
  renderTabs();
  renderProducts();
  updateCheckoutSidebar();
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("language-modal");
  if (e.target === modal) modal.classList.remove("open");
});

switchServer('survival');
