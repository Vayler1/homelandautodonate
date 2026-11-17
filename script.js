// Каталог товарів для Survival і Grief
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

// Словник перекладів інтерфейсу та товарів
const translations = {
  uk: {
    backBtn: "На головну",
    modalTitle: "Оберіть мову",
    selectServerTitle: "Оберіть режим гри",
    survivalDesc: "Військово-політичне виживання на мапі України: міста, економіка, альянси та війни націй",
    griefDesc: "Гріф-сервер: привати блоками, PvP-битви за ресурси, клани та рейди",
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
    payBtn: "Оплатити",
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
    survivalDesc: "Geopolitical survival on the map of Ukraine: cities, alliances, economy, and nation wars",
    griefDesc: "Grief server: block claims, PvP battles for resources, clans, and raids",
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
    payBtn: "Pay",
    loading: "Generating link...",
    recipient: "Recipient:",
    serverLabel: "Server:",
    legalItem1: "Official digital content payment processed by Donatello LLC",
    legalItem2: "All taxes (18% PIT and 5% Military levy) paid by tax agent",
    disclaimer: "By completing the payment, you purchase access to digital game content under the public agency agreement and Homeland server rules. Funds are non-refundable.",
    foreverTag: "PERMANENT",
    periodTag: "LIMITED",
    wipeTag: "TILL WIPE",
    // Категорії
    "Привілеї": "Ranks", "Кейси": "Cases", "Валюта": "Currency", "Інше": "Other", "Кейси та Пропуски": "Cases & Passes",
    // Товари
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Джура": "Dzhura", "Пластун": "Plastun", "Характерник": "Kharakternyk", "Отаман": "Otaman", "Воєвода": "Voievoda",
    "Донат кейс": "Donate Case", "Донат-кейс": "Donate Case", "Косметичний кейс": "Cosmetic Case",
    "Кейс валюти": "Currency Case", "Преміум Батлпас": "Premium Battlepass", "Premium Battlepass": "Premium Battlepass",
    // Описи
    "Назавжди": "Permanent", "Термін: 3 місяці": "3 Months access", "Термін: 1 місяць": "1 Month access",
    "Випадковий донат-ранг": "Random donate rank", "Випадковий донат назавжди": "Random permanent rank",
    "1 шт. (Назавжди)": "1 pc. (Permanent)", "5 шт.": "Bundle: 5 pcs.", "10 шт.": "Large: 10 pcs.", "20 шт.": "Mega: 20 pcs.",
    "1 шт. (до вайпу)": "1 pc. (till wipe)", "5 шт. (до вайпу)": "5 pcs. (till wipe)", "10 шт. (до вайпу)": "10 pcs. (till wipe)", "20 шт. (до вайпу)": "20 pcs. (till wipe)",
    "Доступ на 1 сезон": "Full Season 1 access", "Доступ на 1 сезон (1 міс.)": "Season 1 access (1 mo.)"
  },
  de: {
    backBtn: "Zur Startseite",
    modalTitle: "Sprache wählen",
    selectServerTitle: "Spielmodus wählen",
    survivalDesc: "Geopolitisches Survival auf der Ukraine-Karte: Städte, Allianzen, Wirtschaft und Kriege",
    griefDesc: "Grief-Server mit Block-Claims, PvP-Ressourcenkämpfen, Clans und Raids",
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
    payBtn: "Bezahlen",
    loading: "Link wird generiert...",
    recipient: "Empfänger:",
    serverLabel: "Server:",
    legalItem1: "Offizielle Zahlung für digitale Inhalte über Donatello LLC",
    legalItem2: "Vollständige Abführung aller Steuern durch den Steueragenten",
    disclaimer: "Mit der Zahlung erwerben Sie das Recht auf digitalen Inhalt gemäß Agenturvertrag und Serverregeln. Eine Rückerstattung ist ausgeschlossen.",
    foreverTag: "DAUERHAFT",
    periodTag: "ZEITLICH",
    wipeTag: "BIS WIPE",
    "Привілеї": "Ränge", "Кейси": "Kisten", "Валюта": "Währung", "Інше": "Sonstiges", "Кейси та Пропуски": "Kisten & Pässe",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Джура": "Dzhura", "Пластун": "Plastun", "Характерник": "Kharakternyk", "Отаман": "Otaman", "Воєвода": "Voievoda",
    "Донат кейс": "Donate Kiste", "Донат-кейс": "Donate Kiste", "Косметичний кейс": "Kosmetische Kiste",
    "Кейс валюти": "Währungskiste", "Преміум Батлпас": "Premium Battlepass", "Premium Battlepass": "Premium Battlepass",
    "Назавжди": "Dauerhaft", "Термін: 3 місяці": "3 Monate Laufzeit", "Термін: 1 місяць": "1 Monat Laufzeit",
    "Випадковий донат-ранг": "Zufälliger Rang", "Випадковий донат назавжди": "Zufälliger Rang dauerhaft",
    "1 шт. (Назавжди)": "1 Stk. (Dauerhaft)", "5 шт.": "Paket: 5 Stk.", "10 шт.": "Großes Paket: 10 Stk.", "20 шт.": "Maxi: 20 Stk.",
    "1 шт. (до вайпу)": "1 Stk. (bis zum Wipe)", "5 шт. (до вайпу)": "5 Stk. (bis zum Wipe)", "10 шт. (до вайпу)": "10 Stk. (bis zum Wipe)", "20 шт. (до вайпу)": "20 Stk. (bis zum Wipe)",
    "Доступ на 1 сезон": "Zugang für Saison 1", "Доступ на 1 сезон (1 міс.)": "Zugang für Saison 1 (1 Mon.)"
  },
  pl: {
    backBtn: "Na stronę główną",
    modalTitle: "Wybierz język",
    selectServerTitle: "Wybierz tryb gry",
    survivalDesc: "Geopolityczny survival na mapie Ukrainy: miasta, sojusze, gospodarka i wojny narodów",
    griefDesc: "Serwer grief: działki blokowe, walki PvP o surowce, klany i rajdy",
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
    payBtn: "Zapłać",
    loading: "Tworzenie linku...",
    recipient: "Odbiorca:",
    serverLabel: "Serwer:",
    legalItem1: "Oficjalna płatność za treści cyfrowe przez Donatello Sp. z o.o.",
    legalItem2: "Wszystkie podatki są rozliczane automatycznie przez płatnika",
    disclaimer: "Dokonując płatności, nabywasz prawo dostępu do treści cyfrowych zgodnie z regulaminem i umową agencyjną. Środki nie podlegają zwrotowi.",
    foreverTag: "NA ZAWSZE",
    periodTag: "OKRES",
    wipeTag: "DO WIPE'A",
    "Привілеї": "Rangi", "Кейси": "Skrzynie", "Валюта": "Waluta", "Інше": "Inne", "Кейси та Пропуски": "Skrzynie i Przepustki",
    "Козак": "Kozak", "Сотник": "Setnik", "Полковник": "Pułkownik", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Джура": "Dzhura", "Пластун": "Plastun", "Характерник": "Kharakternyk", "Отаман": "Otaman", "Воєвода": "Wojewoda",
    "Донат кейс": "Donate Skrzynia", "Донат-кейс": "Donate Skrzynia", "Косметичний кейс": "Skrzynia Kosmetyczna",
    "Кейс валюти": "Skrzynia Waluty", "Преміум Батлпас": "Premium Battlepass", "Premium Battlepass": "Premium Battlepass",
    "Назавжди": "Na zawsze", "Термін: 3 місяці": "Okres: 3 miesiące", "Термін: 1 місяць": "Okres: 1 miesiąc",
    "Випадковий донат-ранг": "Losowa ranga donate", "Випадковий донат назавжди": "Losowa ranga na zawsze",
    "1 шт. (Назавжди)": "1 szt. (Na zawsze)", "5 шт.": "Zestaw: 5 szt.", "10 шт.": "Duży zestaw: 10 szt.", "20 шт.": "Mega: 20 szt.",
    "1 шт. (до вайпу)": "1 szt. (do wipe'a)", "5 шт. (до вайпу)": "5 szt. (do wipe'a)", "10 шт. (до вайпу)": "10 szt. (do wipe'a)", "20 шт. (до вайпу)": "20 szt. (do wipe'a)",
    "Доступ на 1 сезон": "Dostęp do całego 1 sezonu", "Доступ на 1 сезон (1 міс.)": "Dostęp do 1 sezonu (1 mies.)"
  },
  fr: {
    backBtn: "Accueil",
    modalTitle: "Choisir la langue",
    selectServerTitle: "Choisissez le mode",
    survivalDesc: "Survie géopolitique sur la carte de l'Ukraine : villes, alliances, économie et guerres",
    griefDesc: "Serveur Grief : claims par blocs, batailles PvP pour les ressources, clans et pillages",
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
    payBtn: "Payer",
    loading: "Création du lien...",
    recipient: "Destinataire :",
    serverLabel: "Serveur :",
    legalItem1: "Paiement officiel de contenu numérique via Donatello LLC",
    legalItem2: "Tous les impôts sont acquittés par l'agent fiscal officiel",
    disclaimer: "En payant, vous achetez un accès à du contenu numérique conformément aux règles et au contrat d'agence. Les fonds ne sont pas remboursables.",
    foreverTag: "À VIE",
    periodTag: "TEMPORAIRE",
    wipeTag: "JUSQU'AU WIPE",
    "Привілеї": "Grades", "Кейси": "Caisses", "Валюта": "Monnaie", "Інше": "Autre", "Кейси та Пропуски": "Caisses & Pass",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Джура": "Dzhura", "Пластун": "Plastun", "Характерник": "Kharakternyk", "Отаман": "Otaman", "Воєвода": "Voïvode",
    "Донат кейс": "Caisse Donate", "Донат-кейс": "Caisse Donate", "Косметичний кейс": "Caisse Cosmétique",
    "Кейс валюти": "Caisse de Monnaie", "Преміум Батлпас": "Battlepass Premium", "Premium Battlepass": "Battlepass Premium",
    "Назавжди": "À vie", "Термін: 3 місяці": "Période : 3 mois", "Термін: 1 місяць": "Période : 1 mois",
    "Випадковий донат-ранг": "Grade donateur aléatoire", "Випадковий донат назавжди": "Grade aléatoire à vie",
    "1 шт. (Назавжди)": "1 pc. (À vie)", "5 шт.": "Pack : 5 pcs.", "10 шт.": "Grand pack : 10 pcs.", "20 шт.": "Méga : 20 pcs.",
    "1 шт. (до вайпу)": "1 pc. (jusqu'au wipe)", "5 шт. (до вайпу)": "5 pcs. (jusqu'au wipe)", "10 шт. (до вайпу)": "10 pcs. (jusqu'au wipe)", "20 шт. (до вайпу)": "20 pcs. (jusqu'au wipe)",
    "Доступ на 1 сезон": "Accès pour la saison 1", "Доступ на 1 сезон (1 міс.)": "Accès saison 1 (1 mois)"
  },
  es: {
    backBtn: "Inicio",
    modalTitle: "Seleccionar idioma",
    selectServerTitle: "Elige el modo de juego",
    survivalDesc: "Supervivencia geopolítica en el mapa de Ucrania: ciudades, alianzas, economía y guerras",
    griefDesc: "Servidor grief: reclamos por bloques, batallas PvP por recursos, clanes y saqueos",
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
    payBtn: "Pagar",
    loading: "Generando enlace...",
    recipient: "Destinatario:",
    serverLabel: "Servidor:",
    legalItem1: "Pago oficial de contenido digital a través de Donatello LLC",
    legalItem2: "Impuestos liquidados en su totalidad por el agente fiscal",
    disclaimer: "Al pagar, adquiere acceso a contenido digital de acuerdo con el contrato y las normas. Los fondos no son reembolsables.",
    foreverTag: "PERMANENTE",
    periodTag: "TEMPORAL",
    wipeTag: "HASTA EL WIPE",
    "Привілеї": "Rangos", "Кейси": "Cajas", "Валюта": "Moneda", "Інше": "Otro", "Кейси та Пропуски": "Cajas y Pases",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Patrocinador",
    "Джура": "Dzhura", "Пластун": "Plastun", "Характерник": "Kharakternyk", "Отаман": "Otaman", "Воєвода": "Voivoda",
    "Донат кейс": "Caja Donate", "Донат-кейс": "Caja Donate", "Косметичний кейс": "Caja Cosmética",
    "Кейс валюти": "Caja de Moneda", "Преміум Батлпас": "Pase de Batalla Premium", "Premium Battlepass": "Pase de Batalla Premium",
    "Назавжди": "Permanente", "Термін: 3 місяці": "Período: 3 meses", "Термін: 1 місяць": "Período: 1 mes",
    "Випадковий донат-ранг": "Rango de donación aleatorio", "Випадковий донат назавжди": "Rango aleatorio permanente",
    "1 шт. (Назавжди)": "1 ud. (Permanente)", "5 шт.": "Paquete: 5 uds.", "10 шт.": "Paquete grande: 10 uds.", "20 шт.": "Mega: 20 uds.",
    "1 шт. (до вайпу)": "1 ud. (hasta el wipe)", "5 шт. (до вайпу)": "5 uds. (hasta el wipe)", "10 шт. (до вайпу)": "10 uds. (hasta el wipe)", "20 шт. (до вайпу)": "20 uds. (hasta el wipe)",
    "Доступ на 1 сезон": "Acceso a temporada 1", "Доступ на 1 сезон (1 міс.)": "Acceso a temporada 1 (1 mes)"
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

// Застосування перекладу до розмітки
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

    // Локалізація назви та опису
    const localizedTitle = t(item.shortName);
    const localizedDesc = t(item.desc);

    card.innerHTML = `
      <div class="item-card-top">
        <div class="item-icon-box"><i class="fa-solid ${item.icon}"></i></div>
        <span class="item-tag ${tagClass}">${t(tagKey)}</span>
      </div>
      <div>
        <div class="item-title">${localizedTitle}</div>
        <div class="item-desc">${localizedDesc}</div>
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
    totalPriceVal.innerText = `${selectedProduct.price} ₴`;

    const localizedTitle = t(selectedProduct.shortName);
    const localizedDesc = t(selectedProduct.desc);

    orderContent.innerHTML = `
      <div class="order-selected-box">
        <div class="order-row">
          <span class="order-row-title">${localizedTitle} <small style="color:var(--text-muted); font-size:0.75rem;">(${localizedDesc})</small></span>
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

    if (mobileBar) {
      mobileBar.classList.add("visible");
      mProductName.innerText = `${currentServer.toUpperCase()}: ${localizedTitle}`;
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

  // В Donatello передаємо мітку [server] та оригінальну назву товару для плагіна
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

// Старт
applyTranslations();
switchServer('survival');
