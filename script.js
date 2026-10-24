// --- ДАНІ МАГАЗИНУ ---
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
      { name: "Косметичний кейс (1 шт.)", shortName: "Косметичний кейс", tag: "forever", desc: "1 штука (Назавжди)", icon: "fa-wand-magic-sparkles", price: 45 },
      { name: "Косметичний кейс (5 шт.)", shortName: "Косметичний кейс", tag: "forever", desc: "Вигідний пак: 5 шт.", icon: "fa-wand-magic-sparkles", price: 209 },
      { name: "Косметичний кейс (10 шт.)", shortName: "Косметичний кейс", tag: "forever", desc: "Великий пак: 10 шт.", icon: "fa-wand-magic-sparkles", price: 369 },
      { name: "Косметичний кейс (20 шт.)", shortName: "Косметичний кейс", tag: "forever", desc: "Максимальний: 20 шт.", icon: "fa-wand-magic-sparkles", price: 689 }
    ]
  },
  {
    id: "currency",
    name: "Валюта",
    icon: "fa-coins",
    items: [
      { name: "Кейс з ігровою валютою (1 шт.)", shortName: "Кейс валюти", tag: "wipe", desc: "1 штука (діє до вайпу)", icon: "fa-coins", price: 149 },
      { name: "Кейс з ігровою валютою (5 шт.)", shortName: "Кейс валюти", tag: "wipe", desc: "5 штук (діє до вайпу)", icon: "fa-coins", price: 669 },
      { name: "Кейс з ігровою валютою (10 шт.)", shortName: "Кейс валюти", tag: "wipe", desc: "10 штук (діє до вайпу)", icon: "fa-coins", price: 1179 },
      { name: "Кейс з ігровою валютою (20 шт.)", shortName: "Кейс валюти", tag: "wipe", desc: "20 штук (діє до вайпу)", icon: "fa-coins", price: 2219 }
    ]
  },
  {
    id: "other",
    name: "Інше",
    icon: "fa-star",
    items: [
      { name: "Преміум Батлпас (1 сезон)", shortName: "Преміум Батлпас", tag: "season", desc: "Доступ на весь 1 сезон", icon: "fa-star", price: 89 }
    ]
  }
];

// --- СИСТЕМА ПЕРЕКЛАДІВ ---
const translations = {
  uk: {
    backBtn: "На головну",
    heroBadge: "Офіційна каса сервера",
    heroStat: "Видача до <strong>60 сек</strong>",
    motto: "Твоя земля. Твоя історія.",
    step1: "Введіть ваш нікнейм",
    step1Desc: "Товар буде нараховано саме на цей нік у грі",
    step2: "Оберіть товар",
    step2Desc: "Оберіть привілей або кейс з каталогу",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span>Гравцям <strong>Bedrock</strong> обов'язково ставити <code>.</code> (крапку) перед ніком!</span>",
    placeholder: "Ваш нікнейм...",
    emptyHint: "Оберіть будь-який товар для оплати",
    totalLabel: "До сплати:",
    payBtn: "Оплатити",
    loading: "Створення посилання...",
    guarantee1: "Безпечна офіційна оплата через <strong>Donatello</strong>",
    guarantee2: "Миттєва автоматична видача на сервері",
    disclaimer: "Здійснюючи оплату, ви погоджуєтесь з правилами сервера. Усі покупки є добровільним внеском на розвиток проекту.",
    orderSummary: "Ваше замовлення",
    forPlayer: "Отримувач:",
    foreverTag: "НАЗАВЖДИ",
    periodTag: "3 МІСЯЦІ",
    wipeTag: "ДО ВАЙПУ",
    seasonTag: "1 СЕЗОН"
  },
  en: {
    backBtn: "Main site",
    heroBadge: "Official Server Store",
    heroStat: "Delivery in <strong>60 sec</strong>",
    motto: "Your land. Your story.",
    step1: "Enter your nickname",
    step1Desc: "Items will be credited to this nickname",
    step2: "Select product",
    step2Desc: "Choose a rank, case or currency pack",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span><strong>Bedrock</strong> players must put <code>.</code> (dot) before nickname!</span>",
    placeholder: "Your nickname...",
    emptyHint: "Select any product to proceed",
    totalLabel: "Total:",
    payBtn: "Proceed to Pay",
    loading: "Generating link...",
    guarantee1: "Secure official payment via <strong>Donatello</strong>",
    guarantee2: "Instant automatic delivery in-game",
    disclaimer: "By paying, you agree to the server rules. All purchases are considered voluntary donations.",
    orderSummary: "Order Summary",
    forPlayer: "Recipient:",
    foreverTag: "PERMANENT",
    periodTag: "3 MONTHS",
    wipeTag: "TILL WIPE",
    seasonTag: "SEASON 1",
    "Привілеї": "Ranks", "Кейси": "Cases", "Валюта": "Currency", "Інше": "Other",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Lifetime", "Термін: 3 місяці": "3 Months period", "Донат кейс": "Donate Case",
    "Випадковий донат-ранг": "Random donate rank", "Косметичний кейс": "Cosmetic Case",
    "1 штука (Назавжди)": "1 pc. (Permanent)", "Вигідний пак: 5 шт.": "Bundle: 5 pcs.", "Великий пак: 10 шт.": "Large: 10 pcs.", "Максимальний: 20 шт.": "Mega: 20 pcs.",
    "Кейс валюти": "Currency Case", "1 штука (діє до вайпу)": "1 pc. (valid until wipe)", "5 штук (діє до вайпу)": "5 pcs. (valid until wipe)", "10 штук (діє до вайпу)": "10 pcs. (valid until wipe)", "20 штук (діє до вайпу)": "20 pcs. (valid until wipe)",
    "Преміум Батлпас": "Premium Battlepass", "Доступ на весь 1 сезон": "Full Season 1 access"
  },
  de: {
    backBtn: "Zur Website",
    heroBadge: "Offizieller Server-Shop",
    heroStat: "Lieferung bis <strong>60 Sek.</strong>",
    motto: "Dein Land. Deine Geschichte.",
    step1: "Gib deinen Nicknamen ein",
    step1Desc: "Artikel werden diesem Spielernamen gutgeschrieben",
    step2: "Produkt wählen",
    step2Desc: "Wähle einen Rang, eine Kiste oder Währung",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span><strong>Bedrock</strong>-Spieler müssen einen <code>.</code> (Punkt) voranstellen!</span>",
    placeholder: "Dein Nickname...",
    emptyHint: "Wähle ein Produkt aus",
    totalLabel: "Zu zahlen:",
    payBtn: "Bezahlen",
    loading: "Link wird erstellt...",
    guarantee1: "Sichere offizielle Zahlung über <strong>Donatello</strong>",
    guarantee2: "Sofortige automatische Ausgabe auf dem Server",
    disclaimer: "Mit der Zahlung stimmst du den Serverregeln zu. Käufe sind freiwillige Spenden.",
    orderSummary: "Bestellübersicht",
    forPlayer: "Empfänger:",
    foreverTag: "DAUERHAFT",
    periodTag: "3 MONATE",
    wipeTag: "BIS ZUM WIPE",
    seasonTag: "SAISON 1",
    "Привілеї": "Ränge", "Кейси": "Kisten", "Валюта": "Währung", "Інше": "Sonstiges",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Dauerhaft", "Термін: 3 місяці": "3 Monate Laufzeit", "Донат кейс": "Donate Kiste",
    "Випадковий донат-ранг": "Zufälliger Donate-Rang", "Косметичний кейс": "Kosmetische Kiste",
    "1 штука (Назавжди)": "1 Stk. (Dauerhaft)", "Вигідний пак: 5 шт.": "Sparpaket: 5 Stk.", "Великий пак: 10 шт.": "Großes Paket: 10 Stk.", "Максимальний: 20 шт.": "Maxi-Paket: 20 Stk.",
    "Кейс валюти": "Währungskiste", "1 штука (діє до вайпу)": "1 Stk. (bis zum Wipe)", "5 штук (діє до вайпу)": "5 Stk. (bis zum Wipe)", "10 штук (діє до вайпу)": "10 Stk. (bis zum Wipe)", "20 штук (діє до вайпу)": "20 Stk. (bis zum Wipe)",
    "Преміум Батлпас": "Premium Battlepass", "Доступ на весь 1 сезон": "Zugang für Saison 1"
  },
  pl: {
    backBtn: "Na stronę główną",
    heroBadge: "Oficjalny sklep serwera",
    heroStat: "Dostawa do <strong>60 sek.</strong>",
    motto: "Twoja ziemia. Twoja historia.",
    step1: "Wpisz swój nick",
    step1Desc: "Przedmiot zostanie przypisany do tego nicku w grze",
    step2: "Wybierz produkt",
    step2Desc: "Wybierz rangę, skrzynię lub walutę",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span>Gracze <strong>Bedrock</strong> muszą dodać <code>.</code> (kropkę) przed nickiem!</span>",
    placeholder: "Twój nick...",
    emptyHint: "Wybierz produkt, aby kontynuować",
    totalLabel: "Do zapłaty:",
    payBtn: "Zapłać",
    loading: "Generowanie linku...",
    guarantee1: "Bezpieczna oficjalna płatność przez <strong>Donatello</strong>",
    guarantee2: "Błyskawiczne automatyczne wydanie na serwerze",
    disclaimer: "Dokonując płatności, akceptujesz regulamin serwera. Zakupy są dobrowolnym wsparciem.",
    orderSummary: "Podsumowanie",
    forPlayer: "Odbiorca:",
    foreverTag: "NA ZAWSZE",
    periodTag: "3 MIESIĄCE",
    wipeTag: "DO WIPE'U",
    seasonTag: "SEZON 1",
    "Привілеї": "Rangi", "Кейси": "Skrzynie", "Валюта": "Waluta", "Інше": "Inne",
    "Козак": "Kozak", "Сотник": "Setnik", "Полковник": "Pułkownik", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "Na zawsze", "Термін: 3 місяці": "Okres: 3 miesiące", "Донат кейс": "Donate Skrzynia",
    "Випадковий донат-ранг": "Losowa ranga donate", "Косметичний кейс": "Skrzynia Kosmetyczna",
    "1 штука (Назавжди)": "1 sztuka (Na zawsze)", "Вигідний пак: 5 шт.": "Zestaw: 5 szt.", "Великий пак: 10 шт.": "Duży zestaw: 10 szt.", "Максимальний: 20 шт.": "Maksymalny: 20 szt.",
    "Кейс валюти": "Skrzynia Waluty", "1 штука (діє до вайпу)": "1 szt. (do wipe'u)", "5 штук (діє до вайпу)": "5 szt. (do wipe'u)", "10 штук (діє до вайпу)": "10 szt. (do wipe'u)", "20 штук (діє до вайпу)": "20 szt. (do wipe'u)",
    "Преміум Батлпас": "Premium Battlepass", "Доступ на весь 1 сезон": "Dostęp do całego 1 sezonu"
  },
  fr: {
    backBtn: "Site principal",
    heroBadge: "Boutique officielle",
    heroStat: "Livraison en <strong>60 sec</strong>",
    motto: "Votre terre. Votre histoire.",
    step1: "Entrez votre pseudo",
    step1Desc: "L'article sera crédité sur ce pseudo en jeu",
    step2: "Sélectionnez le produit",
    step2Desc: "Choisissez un grade, une caisse ou de la monnaie",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span>Les joueurs <strong>Bedrock</strong> doivent mettre un <code>.</code> (point) avant leur pseudo !</span>",
    placeholder: "Votre pseudo...",
    emptyHint: "Sélectionnez un produit pour payer",
    totalLabel: "À payer :",
    payBtn: "Payer",
    loading: "Génération du lien...",
    guarantee1: "Paiement officiel sécurisé via <strong>Donatello</strong>",
    guarantee2: "Attribution automatique instantanée",
    disclaimer: "En effectuant un paiement, vous acceptez les règles du serveur. Tous les achats sont des dons volontaires.",
    orderSummary: "Récapitulatif",
    forPlayer: "Destinataire :",
    foreverTag: "À VIE",
    periodTag: "3 MOIS",
    wipeTag: "JUSQU'AU WIPE",
    seasonTag: "SAISON 1",
    "Привілеї": "Grades", "Кейси": "Caisses", "Валюта": "Monnaie", "Інше": "Autre",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Назавжди": "À vie", "Термін: 3 місяці": "Période : 3 mois", "Донат кейс": "Caisse Donate",
    "Випадковий донат-ранг": "Grade donateur aléatoire", "Косметичний кейс": "Caisse Cosmétique",
    "1 штука (Назавжди)": "1 pc. (À vie)", "Вигідний пак: 5 шт.": "Pack : 5 pcs.", "Великий пак: 10 шт.": "Grand pack : 10 pcs.", "Максимальний: 20 шт.": "Mega : 20 pcs.",
    "Кейс валюти": "Caisse de Monnaie", "1 штука (діє до вайпу)": "1 pc. (jusqu'au wipe)", "5 штук (діє до вайпу)": "5 pcs. (jusqu'au wipe)", "10 штук (діє до вайпу)": "10 pcs. (jusqu'au wipe)", "20 штук (діє до вайпу)": "20 pcs. (jusqu'au wipe)",
    "Преміум Батлпас": "Battlepass Premium", "Доступ на весь 1 сезон": "Accès pour la saison 1"
  },
  es: {
    backBtn: "Sitio principal",
    heroBadge: "Tienda oficial",
    heroStat: "Entrega en <strong>60 seg</strong>",
    motto: "Tu tierra. Tu historia.",
    step1: "Ingresa tu apodo",
    step1Desc: "El artículo se enviará a este apodo en el juego",
    step2: "Selecciona el producto",
    step2Desc: "Elige un rango, caja o monedas",
    warning: "<i class='fa-solid fa-circle-exclamation'></i> <span>¡Jugadores de <strong>Bedrock</strong> deben poner un <code>.</code> (punto) antes del apodo!</span>",
    placeholder: "Tu apodo...",
    emptyHint: "Elige cualquier producto para pagar",
    totalLabel: "Total:",
    payBtn: "Pagar",
    loading: "Generando enlace...",
    guarantee1: "Pago oficial seguro a través de <strong>Donatello</strong>",
    guarantee2: "Entrega automática instantánea",
    disclaimer: "Al realizar el pago, aceptas las reglas del servidor. Todas las compras son donaciones voluntarias.",
    orderSummary: "Resumen del pedido",
    forPlayer: "Destinatario:",
    foreverTag: "PERMANENTE",
    periodTag: "3 MESES",
    wipeTag: "HASTA EL WIPE",
    seasonTag: "TEMPORADA 1",
    "Привілеї": "Rangos", "Кейси": "Cajas", "Валюта": "Moneda", "Інше": "Otro",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Patrocinador",
    "Назавжди": "Permanente", "Термін: 3 місяці": "Período: 3 meses", "Донат кейс": "Caja Donate",
    "Випадковий донат-ранг": "Rango de donación aleatorio", "Косметичний кейс": "Caja Cosmética",
    "1 штука (Назавжди)": "1 ud. (Permanente)", "Вигідний пак: 5 шт.": "Paquete: 5 uds.", "Великий пак: 10 шт.": "Paquete grande: 10 uds.", "Максимальний: 20 шт.": "Mega: 20 uds.",
    "Кейс валюти": "Caja de Moneda", "1 штука (діє до вайпу)": "1 ud. (hasta el wipe)", "5 штук (діє до вайпу)": "5 uds. (hasta el wipe)", "10 штук (діє до вайпу)": "10 uds. (hasta el wipe)", "20 штук (діє до вайпу)": "20 uds. (hasta el wipe)",
    "Преміум Батлпас": "Pase de Batalla Premium", "Доступ на весь 1 сезон": "Acceso a temporada 1"
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

let exchangeRates = {
  en: { symbol: '$', rate: 41.80 },
  de: { symbol: '€', rate: 45.20 },
  fr: { symbol: '€', rate: 45.20 },
  es: { symbol: '€', rate: 45.20 },
  pl: { symbol: 'zł', rate: 10.50 }
};

async function fetchRealRates() {
  try {
    const res = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    const data = await res.json();
    
    const usd = data.find(c => c.cc === 'USD');
    const eur = data.find(c => c.cc === 'EUR');
    const pln = data.find(c => c.cc === 'PLN');

    if (usd) exchangeRates.en.rate = usd.rate;
    if (eur) {
      exchangeRates.de.rate = eur.rate;
      exchangeRates.fr.rate = eur.rate;
      exchangeRates.es.rate = eur.rate;
    }
    if (pln) exchangeRates.pl.rate = pln.rate;
    
    if (currentLang !== 'uk') {
      renderProducts(currentCategory);
      updateCheckoutSidebar();
    }
  } catch (e) {
    console.log("Курси за замовчуванням");
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

// Мобільний sticky bar
let mobileBar = null;

function createMobileBottomBar() {
  if (document.getElementById("mobileBottomBar")) return;
  mobileBar = document.createElement("div");
  mobileBar.id = "mobileBottomBar";
  mobileBar.className = "mobile-bottom-bar";
  mobileBar.innerHTML = `
    <div class="mobile-bar-info">
      <span class="mobile-bar-title" id="mBarTitle">—</span>
      <span class="mobile-bar-price" id="mBarPrice">0 ₴</span>
    </div>
    <button class="mobile-bar-btn" id="mBarBtn" onclick="onMobilePayClick()">
      <span id="mBarBtnText">${t("payBtn")}</span>
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  `;
  document.body.appendChild(mobileBar);
}

function initStore() {
  createMobileBottomBar();
  renderTabs();
  renderProducts(currentCategory);
  updateStaticTexts();
}

function updateStaticTexts() {
  document.getElementById("heroBadgeText").innerText = t("heroBadge");
  document.getElementById("heroStatText").innerHTML = t("heroStat");
  document.getElementById("mottoText").innerText = t("motto");

  document.getElementById("step1Text").innerText = t("step1");
  document.getElementById("step1DescText").innerText = t("step1Desc");
  document.getElementById("warningText").innerHTML = t("warning");
  document.getElementById("nickname").placeholder = t("placeholder");

  document.getElementById("step2Text").innerText = t("step2");
  document.getElementById("step2DescText").innerText = t("step2Desc");

  document.getElementById("backToSiteText").innerText = t("backBtn");
  document.getElementById("orderSummaryTitle").innerText = t("orderSummary");
  document.getElementById("totalPriceLabel").innerText = t("totalLabel");
  document.getElementById("payText").innerText = t("payBtn");
  document.getElementById("guarantee1Text").innerHTML = t("guarantee1");
  document.getElementById("guarantee2Text").innerText = t("guarantee2");
  document.getElementById("disclaimerText").innerText = t("disclaimer");

  currentLangLabel.innerText = currentLang.toUpperCase();
  
  const mBarBtnText = document.getElementById("mBarBtnText");
  if (mBarBtnText) mBarBtnText.innerText = t("payBtn");

  updateCheckoutSidebar();
}

function openLanguageModal() { modal.classList.add("open"); }
function setLanguage(lang) {
  currentLang = lang;
  modal.classList.remove("open");
  initStore();
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
}

function renderTabs() {
  tabsContainer.innerHTML = "";
  storeData.forEach(category => {
    const btn = document.createElement("button");
    btn.className = `category-tab-btn ${category.id === currentCategory ? "active" : ""}`;
    btn.innerHTML = `<i class="fas ${category.icon}"></i> <span>${t(category.name)}</span>`;
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
    const converted = (price / rate).toFixed(2);
    if (symbol === '$') return `(~$${converted})`;
    if (symbol === '€') return `(~${converted} €)`;
    if (symbol === 'zł') return `(~${converted} zł)`;
    return `(~${converted} ${symbol})`;
  }
  return '';
}

function renderProducts(categoryId) {
  gridContainer.innerHTML = "";
  const category = storeData.find(c => c.id === categoryId);
  if (!category) return;

  category.items.forEach(item => {
    const card = document.createElement("div");
    const isSelected = selectedProduct && selectedProduct.name === item.name;
    card.className = `item-card ${isSelected ? "selected" : ""}`;

    // Обробка тегів (вічний, термін, вайп, сезон або без тегу)
    let tagHTML = "";
    if (item.tag) {
      let tagClass = "tag-forever";
      let tagKey = "foreverTag";

      if (item.tag === "period") {
        tagClass = "tag-period";
        tagKey = "periodTag";
      } else if (item.tag === "wipe") {
        tagClass = "tag-wipe";
        tagKey = "wipeTag";
      } else if (item.tag === "season") {
        tagClass = "tag-period";
        tagKey = "seasonTag";
      }

      tagHTML = `<span class="item-tag ${tagClass}">${t(tagKey)}</span>`;
    }

    card.innerHTML = `
      <div class="item-card-top">
        <div class="item-icon-box"><i class="fa-solid ${item.icon}"></i></div>
        ${tagHTML}
      </div>
      <div class="item-card-body">
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
  const mBarTitle = document.getElementById("mBarTitle");
  const mBarPrice = document.getElementById("mBarPrice");
  const mBarBtn = document.getElementById("mBarBtn");

  if (selectedProduct) {
    const converted = getConvertedPrice(selectedProduct.price);
    totalPriceVal.innerHTML = `${selectedProduct.price} ₴ ${converted ? `<small class="total-converted">${converted}</small>` : ''}`;
    
    orderContent.innerHTML = `
      <div class="order-selected-box">
        <div class="order-row">
          <span class="order-item-name">${t(selectedProduct.shortName)}</span>
          <span style="color: var(--primary); font-weight:700;">${selectedProduct.price} ₴</span>
        </div>
        <div class="order-row">
          <span class="order-target-nick">${t("forPlayer")} <strong>${nick || "—"}</strong></span>
          <span class="order-converted">${converted}</span>
        </div>
      </div>
    `;

    // Оновлення мобільного бару
    if (mobileBar) {
      mobileBar.classList.add("show");
      mBarTitle.innerText = t(selectedProduct.shortName);
      mBarPrice.innerHTML = `${selectedProduct.price} ₴ <small>${converted}</small>`;
      mBarBtn.disabled = !nick;
    }
  } else {
    totalPriceVal.innerText = "0 ₴";
    orderContent.innerHTML = `
      <div class="order-empty">
        <i class="fa-solid fa-basket-shopping"></i>
        <span>${t("emptyHint")}</span>
      </div>
    `;
    if (mobileBar) {
      mobileBar.classList.remove("show");
    }
  }

  submitBtn.disabled = !(nick.length > 0 && selectedProduct !== null);
}

function onMobilePayClick() {
  const nick = nicknameInput.value.trim();
  if (!nick) {
    nicknameInput.focus();
    nicknameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  generateLink();
}

nicknameInput.addEventListener("input", updateCheckoutSidebar);

function generateLink() {
  const nickname = nicknameInput.value.trim();
  if (!nickname || !selectedProduct) return;

  submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t("loading")}`;
  submitBtn.disabled = true;

  const mBtn = document.getElementById("mBarBtn");
  if (mBtn) {
    mBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;
    mBtn.disabled = true;
  }

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

initStore();
fetchRealRates();
