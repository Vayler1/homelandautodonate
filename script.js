// Каталог послуг для обох серверів
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

// Словник перекладів
const translations = {
  uk: {
    backBtn: "На головну",
    modalTitle: "Оберіть мову",
    selectServerTitle: "Оберіть режим гри",
    selectServerDesc: "Товари та привілеї залежать від обраного сервера",
    survivalDesc: "Класичне ванільне виживання, економіка та дружня спільнота",
    griefDesc: "Гріф-сервер, привати блоками, битви за ресурси та рейди",
    selectedLabel: "Обрано",
    enterNickTitle: "Вкажіть ігровий нікнейм",
    enterNickDesc: "На цей обліковий запис надійде придбана послуга",
    nickPlaceholder: "Ваш нікнейм у грі...",
    bedrockNotice: "Гравцям <strong>Bedrock</strong> обов'язково писати крапку <code>.</code> перед ніком!",
    chooseProductTitle: "Оберіть послугу",
    chooseProductDesc: "Натисніть на картку товару для оформлення",
    orderSummary: "Деталі замовлення",
    emptyOrder: "Оберіть товар у списку",
    totalLabel: "До сплати:",
    payBtn: "Оплатити через Donatello",
    payBtnShort: "Оплатити",
    loading: "Створення посилання...",
    recipient: "Нікнейм:",
    serverLabel: "Сервер:",
    legalItem1: "Офіційна оплата цифрового контенту через ТОВ «Донателло»",
    legalItem2: "Повна сплата податків (ПДФО 18% та ВЗ 5%) податковим агентом",
    disclaimer: "Здійснюючи платіж, ви купуєте право доступу до авторського цифрового контенту відповідно до публічного агентського договору та правил сервера Homeland. Кошти поверненню не підлягають.",
    foreverTag: "НАЗАВЖДИ",
    periodTag: "ТЕРМІН",
    wipeTag: "ДО ВАЙПУ"
  },
  en: {
    backBtn: "Home",
    modalTitle: "Select Language",
    selectServerTitle: "Choose Game Mode",
    selectServerDesc: "Products and ranks depend on the selected server",
    survivalDesc: "Classic vanilla survival, player economy, and friendly community",
    griefDesc: "Grief server, protection blocks, raids, and PvP battles",
    selectedLabel: "Selected",
    enterNickTitle: "Enter In-Game Nickname",
    enterNickDesc: "The purchased item will be credited to this account",
    nickPlaceholder: "Your in-game nickname...",
    bedrockNotice: "<strong>Bedrock</strong> players must include a dot <code>.</code> before nickname!",
    chooseProductTitle: "Select Product",
    chooseProductDesc: "Click a product card to proceed to checkout",
    orderSummary: "Order Details",
    emptyOrder: "Select a product from the list",
    totalLabel: "Total:",
    payBtn: "Pay with Donatello",
    payBtnShort: "Pay",
    loading: "Generating link...",
    recipient: "Recipient:",
    serverLabel: "Server:",
    legalItem1: "Official digital content payment processed by Donatello LLC",
    legalItem2: "All taxes (18% PIT and 5% Military levy) paid by tax agent",
    disclaimer: "By completing the payment, you purchase access to digital game content under the public agency agreement and Homeland server rules. Funds are non-refundable.",
    foreverTag: "PERMANENT",
    periodTag: "LIMITED",
    wipeTag: "TILL WIPE",
    "Привілеї": "Ranks", "Кейси": "Cases", "Валюта": "Currency", "Інше": "Other", "Кейси та Пропуски": "Cases & Passes"
  },
  de: {
    backBtn: "Zur Startseite",
    modalTitle: "Sprache wählen",
    selectServerTitle: "Spielmodus wählen",
    selectServerDesc: "Produkte und Ränge hängen vom gewählten Server ab",
    survivalDesc: "Klassisches Vanilla-Survival, Wirtschaft und freundliche Community",
    griefDesc: "Grief-Server mit Schutzblöcken, Ressourcen-Kämpfen und Raids",
    selectedLabel: "Ausgewählt",
    enterNickTitle: "Spielernamen eingeben",
    enterNickDesc: "Der Artikel wird diesem Account gutgeschrieben",
    nickPlaceholder: "Dein Nickname im Spiel...",
    bedrockNotice: "<strong>Bedrock</strong>-Spieler müssen einen <code>.</code> voranstellen!",
    chooseProductTitle: "Produkt wählen",
    chooseProductDesc: "Klicke auf eine Karte, um fortzufahren",
    orderSummary: "Bestellübersicht",
    emptyOrder: "Wähle ein Produkt aus der Liste",
    totalLabel: "Gesamtbetrag:",
    payBtn: "Mit Donatello bezahlen",
    payBtnShort: "Bezahlen",
    loading: "Link wird generiert...",
    recipient: "Empfänger:",
    serverLabel: "Server:",
    legalItem1: "Offizielle Zahlung für digitale Inhalte über Donatello LLC",
    legalItem2: "Vollständige Abführung aller Steuern durch den Steueragenten",
    disclaimer: "Mit der Zahlung erwerben Sie das Recht auf digitalen Inhalt gemäß Agenturvertrag und Serverregeln. Eine Rückerstattung ist ausgeschlossen.",
    foreverTag: "DAUERHAFT",
    periodTag: "ZEITLICH",
    wipeTag: "BIS WIPE",
    "Привілеї": "Ränge", "Кейси": "Kisten", "Валюта": "Währung", "Інше": "Sonstiges", "Кейси та Пропуски": "Kisten & Pässe"
  },
  pl: {
    backBtn: "Na stronę główną",
    modalTitle: "Wybierz język",
    selectServerTitle: "Wybierz tryb gry",
    selectServerDesc: "Przedmioty i rangi zależą od wybranego serwera",
    survivalDesc: "Klasyczny vanilla survival, ekonomia i przyjazna społeczność",
    griefDesc: "Serwer grief z blokami ochrony, rajdami i walkami o surowce",
    selectedLabel: "Wybrano",
    enterNickTitle: "Wpisz swój nick",
    enterNickDesc: "Zakupiony przedmiot zostanie przypisany do tego konta",
    nickPlaceholder: "Twój nick w grze...",
    bedrockNotice: "Gracze <strong>Bedrock</strong> muszą postawić kropkę <code>.</code> przed nickiem!",
    chooseProductTitle: "Wybierz usługę",
    chooseProductDesc: "Kliknij kartę produktu, aby przejść do płatności",
    orderSummary: "Podsumowanie zamówienia",
    emptyOrder: "Wybierz produkt z listy",
    totalLabel: "Do zapłaty:",
    payBtn: "Zapłać przez Donatello",
    payBtnShort: "Zapłać",
    loading: "Tworzenie linku...",
    recipient: "Odbiorca:",
    serverLabel: "Serwer:",
    legalItem1: "Oficjalna płatność za treści cyfrowe przez Donatello Sp. z o.o.",
    legalItem2: "Wszystkie podatki są rozliczane automatycznie przez płatnika",
    disclaimer: "Dokonując płatności, nabywasz prawo dostępu do treści cyfrowych zgodnie z regulaminem i umową agencyjną. Środki nie podlegają zwrotowi.",
    foreverTag: "NA ZAWSZE",
    periodTag: "OKRES",
    wipeTag: "DO WIPE'A",
    "Привілеї": "Rangi", "Кейси": "Skrzynie", "Валюта": "Waluta", "Інше": "Inne", "Кейси та Пропуски": "Skrzynie i Przepustki"
  },
  fr: {
    backBtn: "Accueil",
    modalTitle: "Choisir la langue",
    selectServerTitle: "Choisissez le mode",
    selectServerDesc: "Les articles et grades dépendent du serveur sélectionné",
    survivalDesc: "Survie vanilla classique, économie et communauté chaleureuse",
    griefDesc: "Serveur Grief avec blocs de protection, combats et pillages",
    selectedLabel: "Sélectionné",
    enterNickTitle: "Entrez votre pseudo",
    enterNickDesc: "Le produit sera crédité sur ce compte de jeu",
    nickPlaceholder: "Votre pseudo en jeu...",
    bedrockNotice: "Les joueurs <strong>Bedrock</strong> doivent mettre un point <code>.</code> !",
    chooseProductTitle: "Sélectionnez un article",
    chooseProductDesc: "Cliquez sur une carte pour commander",
    orderSummary: "Détails de la commande",
    emptyOrder: "Sélectionnez un article dans la liste",
    totalLabel: "À payer :",
    payBtn: "Payer avec Donatello",
    payBtnShort: "Payer",
    loading: "Création du lien...",
    recipient: "Destinataire :",
    serverLabel: "Serveur :",
    legalItem1: "Paiement officiel de contenu numérique via Donatello LLC",
    legalItem2: "Tous les impôts sont acquittés par l'agent fiscal officiel",
    disclaimer: "En payant, vous achetez un accès à du contenu numérique conformément aux règles et au contrat d'agence. Les fonds ne sont pas remboursables.",
    foreverTag: "À VIE",
    periodTag: "TEMPORAIRE",
    wipeTag: "JUSQU'AU WIPE",
    "Привілеї": "Grades", "Кейси": "Caisses", "Валюта": "Monnaie", "Інше": "Autre", "Кейси та Пропуски": "Caisses & Pass"
  },
  es: {
    backBtn: "Inicio",
    modalTitle: "Seleccionar idioma",
    selectServerTitle: "Elige el modo de juego",
    selectServerDesc: "Los productos dependen del servidor seleccionado",
    survivalDesc: "Supervivencia vainilla clásica, economía y comunidad amigable",
    griefDesc: "Servidor grief con bloques de protección, saqueos y batallas",
    selectedLabel: "Seleccionado",
    enterNickTitle: "Ingresa tu apodo",
    enterNickDesc: "El artículo comprado se acreditará a esta cuenta",
    nickPlaceholder: "Tu apodo en el juego...",
    bedrockNotice: "¡Jugadores de <strong>Bedrock</strong> deben poner un punto <code>.</code> antes del nick!",
    chooseProductTitle: "Elige el servicio",
    chooseProductDesc: "Haz clic en una tarjeta para proceder",
    orderSummary: "Detalles del pedido",
    emptyOrder: "Selecciona un producto de la lista",
    totalLabel: "Total:",
    payBtn: "Pagar con Donatello",
    payBtnShort: "Pagar",
    loading: "Generando enlace...",
    recipient: "Destinatario:",
    serverLabel: "Servidor:",
    legalItem1: "Pago oficial de contenido digital a través de Donatello LLC",
    legalItem2: "Impuestos liquidados en su totalidad por el agente fiscal",
    disclaimer: "Al pagar, adquiere acceso a contenido digital de acuerdo con el contrato y las normas. Los fondos no son reembolsables.",
    foreverTag: "PERMANENTE",
    periodTag: "TEMPORAL",
    wipeTag: "HASTA EL WIPE",
    "Привілеї": "Rangos", "Кейси": "Cajas", "Валюта": "Moneda", "Інше": "Otro", "Кейси та Пропуски": "Cajas y Pases"
  }
};

let currentLang = localStorage.getItem('homeland_store_lang') || 'uk';
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

// Застосування перекладів до всіх статичних елементів
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  const langLabel = document.getElementById("currentLangLabel");
  if (langLabel) langLabel.innerText = currentLang.toUpperCase();
}

function switchServer(srv) {
  currentServer = srv;
  document.getElementById("card-survival").classList.toggle("active", srv === 'survival');
  document.getElementById("card-grief").classList.toggle("active", srv === 'grief');
  
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

  const mobileBar = document.getElementById("mobileBar");
  const mProductName = document.getElementById("mProductName");
  const mProductPrice = document.getElementById("mProductPrice");

  if (selectedProduct) {
    const converted = getConvertedPrice(selectedProduct.price);
    totalPriceVal.innerText = `${selectedProduct.price} ₴`;

    orderContent.innerHTML = `
      <div class="order-selected-box">
        <div class="order-row">
          <span class="order-row-title">${selectedProduct.name}</span>
          <strong style="color:var(--primary);">${selectedProduct.price} ₴</strong>
        </div>
        <div class="order-row">
          <span style="color:var(--text-muted);">${t("serverLabel")}</span>
          <span style="text-transform: capitalize; font-weight:600; color:var(--primary);">${currentServer}</span>
        </div>
        <div class="order-row">
          <span style="color:var(--text-muted);">${t("recipient")}</span>
          <strong>${nick || "—"}</strong>
        </div>
      </div>
    `;
    submitBtn.disabled = nick.length === 0;

    // Оновлення мобільного бару
    if (mobileBar) {
      mobileBar.classList.add("visible");
      mProductName.innerText = `${currentServer.toUpperCase()}: ${selectedProduct.shortName}`;
      mProductPrice.innerText = `${selectedProduct.price} ₴`;
    }
  } else {
    totalPriceVal.innerText = "0 ₴";
    orderContent.innerHTML = `
      <div class="order-empty">
        <i class="fa-solid fa-basket-shopping empty-icon"></i>
        <span>${t("emptyOrder")}</span>
      </div>
    `;
    submitBtn.disabled = true;

    if (mobileBar) {
      mobileBar.classList.remove("visible");
    }
  }
}

function onMobilePayClick() {
  const nickInput = document.getElementById("nickname");
  const nick = nickInput.value.trim();

  if (!nick) {
    nickInput.focus();
    nickInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  generateLink();
}

document.getElementById("nickname").addEventListener("input", updateCheckoutSidebar);

function generateLink() {
  const nick = document.getElementById("nickname").value.trim();
  if (!nick || !selectedProduct) return;

  const btnText = document.getElementById("submitBtnText");
  if (btnText) btnText.innerText = t("loading");

  const mBtn = document.getElementById("mPayBtn");
  if (mBtn) mBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

  // Формуємо коментар з міткою для бота
  const serverComment = `[${currentServer}] ${selectedProduct.name}`;

  const donatelloLang = currentLang === 'uk' ? 'ua' : (currentLang === 'pl' ? 'pl' : 'en');

  const params = new URLSearchParams({
    a: selectedProduct.price,
    c: nick,
    m: serverComment,
    lang: donatelloLang
  });

  setTimeout(() => {
    window.location.href = `https://donatello.to/homelandsurvival?${params.toString()}`;
  }, 250);
}

function openLanguageModal() {
  document.getElementById("language-modal").classList.add("open");
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('homeland_store_lang', lang);
  document.getElementById("language-modal").classList.remove("open");
  
  applyTranslations();
  renderTabs();
  renderProducts();
  updateCheckoutSidebar();
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("language-modal");
  if (e.target === modal) modal.classList.remove("open");
});

// Ініціалізація
applyTranslations();
switchServer('survival');
