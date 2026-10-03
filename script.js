const storeData = [
  {
    id: "ranks",
    name: "Привілеї",
    icon: "fa-crown",
    items: [
      { name: "Козак (Назавжди)", shortName: "Козак", desc: "Назавжди", price: 100 },
      { name: "Козак (3 місяці)", shortName: "Козак", desc: "3 місяці", price: 60 },
      { name: "Сотник (Назавжди)", shortName: "Сотник", desc: "Назавжди", price: 170 },
      { name: "Сотник (3 місяці)", shortName: "Сотник", desc: "3 місяці", price: 120 },
      { name: "Полковник (Назавжди)", shortName: "Полковник", desc: "Назавжди", price: 399 },
      { name: "Полковник (3 місяці)", shortName: "Полковник", desc: "3 місяці", price: 299 },
      { name: "Гетьман (Назавжди)", shortName: "Гетьман", desc: "Назавжди", price: 750 },
      { name: "Гетьман (3 місяці)", shortName: "Гетьман", desc: "3 місяці", price: 450 },
      { name: "Спонсор (Назавжди)", shortName: "Спонсор", desc: "Назавжди", price: 1499 },
      { name: "Спонсор (3 місяці)", shortName: "Спонсор", desc: "3 місяці", price: 999 }
    ]
  },
  {
    id: "cases",
    name: "Кейси",
    icon: "fa-box-open",
    items: [
      { name: "Донат кейс", shortName: "Донат кейс", desc: "Випадковий донат", price: 150 },
      { name: "Косметичний кейс (1 шт.)", shortName: "Косметичний кейс", desc: "1 шт.", price: 40 },
      { name: "Косметичний кейс (5 шт.)", shortName: "Косметичний кейс", desc: "5 шт.", price: 180 },
      { name: "Косметичний кейс (10 шт.)", shortName: "Косметичний кейс", desc: "10 шт.", price: 320 },
      { name: "Косметичний кейс (20 шт.)", shortName: "Косметичний кейс", desc: "20 шт.", price: 600 }
    ]
  },
  {
    id: "currency",
    name: "Валюта",
    icon: "fa-coins",
    items: [
      { name: "Кейс з ігровою валютою (1 шт.)", shortName: "Кейс валюти", desc: "1 шт.", price: 129 },
      { name: "Кейс з ігровою валютою (5 шт.)", shortName: "Кейс валюти", desc: "5 шт.", price: 580 },
      { name: "Кейс з ігровою валютою (10 шт.)", shortName: "Кейс валюти", desc: "10 шт.", price: 1030 },
      { name: "Кейс з ігровою валютою (20 шт.)", shortName: "Кейс валюти", desc: "20 шт.", price: 1935 }
    ]
  },
  {
    id: "other",
    name: "Інше",
    icon: "fa-star",
    items: [
      { name: "Преміум Батлпас (1 сезон)", shortName: "Преміум Батлпас", desc: "1 сезон", price: 75 }
    ]
  }
];

let currentCategory = storeData[0].id;
let selectedProduct = null;

const tabsContainer = document.getElementById("categoryTabs");
const gridContainer = document.getElementById("productsGrid");
const nicknameInput = document.getElementById("nickname");
const submitBtn = document.getElementById("submitBtn");
const selectedInfo = document.getElementById("selectedInfo");

function initStore() {
  renderTabs();
  renderProducts(currentCategory);
}

function renderTabs() {
  tabsContainer.innerHTML = "";
  storeData.forEach(category => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${category.id === currentCategory ? "active" : ""}`;
    btn.innerHTML = `<i class="fas ${category.icon}"></i> ${category.name}`;
    btn.onclick = () => {
      currentCategory = category.id;
      renderTabs();
      renderProducts(category.id);
    };
    tabsContainer.appendChild(btn);
  });
}

function renderProducts(categoryId) {
  gridContainer.innerHTML = "";
  const category = storeData.find(c => c.id === categoryId);
  
  category.items.forEach(item => {
    const card = document.createElement("div");
    const isSelected = selectedProduct && selectedProduct.name === item.name;
    card.className = `product-card ${isSelected ? "selected" : ""}`;
    
    card.innerHTML = `
      <i class="fas fa-check-circle check-icon"></i>
      <div>
        <div class="product-name">${item.shortName}</div>
        <div class="product-duration">${item.desc}</div>
      </div>
      <div class="product-price">${item.price} ₴</div>
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
      Обрано: <strong>${selectedProduct.shortName}</strong> 
      <span class="final-price">${selectedProduct.price} ₴</span>
    `;
  }

  submitBtn.disabled = !(nick.length > 0 && selectedProduct !== null);
}

nicknameInput.addEventListener("input", updateCheckoutState);

function generateLink() {
  const nickname = nicknameInput.value.trim();
  if (!nickname || !selectedProduct) return;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Створення...';
  submitBtn.disabled = true;

  const params = new URLSearchParams({
    a: selectedProduct.price,
    c: nickname,
    m: selectedProduct.name
  });

  const url = `https://donatello.to/homelandsurvival?${params.toString()}`;
  
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

function closeModal() {
  const modal = document.getElementById("country-modal");
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.3s ease';
  setTimeout(() => { modal.style.display = "none"; }, 300);
}

function redirectToGlobal() {
  window.location.href = "https://homeland-survival.tebex.io/"; 
}

// Запуск відмальовки
initStore();
