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
      id: "battlepass",
      name: "Батлпас",
      icon: "fa-award",
      items: [
        { name: "Преміум Батлпас (1 сезон)", shortName: "Преміум Батлпас", tag: "period", desc: "Доступ на весь 1 сезон (2 міс.)", icon: "fa-star", price: 119 },
        { name: "1 рівень БП (150 очків)", shortName: "+1 рівень БП", tag: "points", desc: "Миттєво +150 очків", icon: "fa-angles-up", price: 29 },
        { name: "2 рівні БП (300 очків)", shortName: "+2 рівні БП", tag: "points", desc: "Миттєво +300 очків", icon: "fa-angles-up", price: 55 },
        { name: "5 рівнів БП (750 очків)", shortName: "+5 рівнів БП", tag: "points", desc: "Миттєво +750 очків", icon: "fa-angles-up", price: 129 },
        { name: "10 рівнів БП (1500 очків)", shortName: "+10 рівнів БП", tag: "points", desc: "Миттєво +1500 очків", icon: "fa-angles-up", price: 249 },
        { name: "20 рівнів БП (3000 очків)", shortName: "+20 рівнів БП", tag: "points", desc: "Миттєво +3000 очків", icon: "fa-angles-up", price: 469 }
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
      id: "cases",
      name: "Кейси",
      icon: "fa-box-open",
      items: [
        { name: "Донат-кейс", shortName: "Донат-кейс", tag: "forever", desc: "Випадковий донат назавжди", icon: "fa-cube", price: 129 }
      ]
    },
    {
      id: "battlepass",
      name: "Батлпас",
      icon: "fa-award",
      items: [
        { name: "Premium Battlepass (1 сезон)", shortName: "Premium Battlepass", tag: "period", desc: "Доступ на 1 сезон (1 міс.)", icon: "fa-star", price: 109 },
        { name: "1 рівень БП (75 очків)", shortName: "+1 рівень БП", tag: "points", desc: "Миттєво +75 очків", icon: "fa-angles-up", price: 19 },
        { name: "2 рівні БП (150 очків)", shortName: "+2 рівні БП", tag: "points", desc: "Миттєво +150 очків", icon: "fa-angles-up", price: 35 },
        { name: "5 рівнів БП (375 очків)", shortName: "+5 рівнів БП", tag: "points", desc: "Миттєво +375 очків", icon: "fa-angles-up", price: 79 },
        { name: "10 рівнів БП (750 очків)", shortName: "+10 рівнів БП", tag: "points", desc: "Миттєво +750 очків", icon: "fa-angles-up", price: 149 },
        { name: "20 рівнів БП (1500 очків)", shortName: "+20 рівнів БП", tag: "points", desc: "Миттєво +1500 очків", icon: "fa-angles-up", price: 279 }
      ]
    }
  ]
};

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
    wipeTag: "ДО ВАЙПУ",
    pointsTag: "+ОЧКИ"
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
    pointsTag: "+TIERS",
    "Привілеї": "Ranks", "Кейси": "Cases", "Валюта": "Currency", "Батлпас": "Battlepass",
    "Козак": "Kozak", "Сотник": "Sotnyk", "Полковник": "Polkovnyk", "Гетьман": "Hetman", "Спонсор": "Sponsor",
    "Джура": "Dzhura", "Пластун": "Plastun", "Характерник": "Kharakternyk", "Отаман": "Otaman", "Воєвода": "Voievoda",
    "Донат кейс": "Donate Case", "Донат-кейс": "Donate Case", "Косметичний кейс": "Cosmetic Case",
    "Кейс валюти": "Currency Case", "Преміум Батлпас": "Premium Battlepass", "Premium Battlepass": "Premium Battlepass",
    "+1 рівень БП": "+1 BP Tier", "+2 рівні БП": "+2 BP Tiers", "+5 рівнів БП": "+5 BP Tiers", "+10 рівнів БП": "+10 BP Tiers", "+20 рівнів БП": "+20 BP Tiers",
    // Сурвайвал (150/рівень)
    "Миттєво +150 очків": "Instant +150 points", "Миттєво +300 очків": "Instant +300 points", "Миттєво +750 очків": "Instant +750 points", "Миттєво +1500 очків": "Instant +1500 points", "Миттєво +3000 очків": "Instant +3000 points",
    // Гріф (75/рівень)
    "Миттєво +75 очків": "Instant +75 points", "Миттєво +375 очків": "Instant +375 points",
    "Назавжди": "Permanent", "Термін: 3 місяці": "3 Months access", "Термін: 1 місяць": "1 Month access",
    "Випадковий донат-ранг": "Random donate rank", "Випадковий донат назавжди": "Random permanent
