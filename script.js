/* ==========================================================
   НАСТРОЙКИ — поменяйте под свой ресторан
   ========================================================== */
const CONFIG = {
  // Номер WhatsApp в международном формате БЕЗ "+", пробелов и скобок.
  whatsappPhone: "996880886600",

  // Приветственное сообщение для кнопок "Написать в WhatsApp" (без заказа)
  greetingMessage: "Здравствуйте! Хочу сделать заказ в TomYam Rolls 🌶️",

  restaurantName: "TomYam Rolls",
  currency: "сом",
  freeDeliveryFrom: 500,
  deliveryFee: 100
};

/* ==========================================================
   МЕНЮ — данные блюд
   Фото: положите файл images/{id}.jpg (например images/rl1.jpg) —
   он подставится в карточку автоматически. Пока файла нет,
   вместо фото показывается аккуратная заглушка.
   ========================================================== */
const MENU = [
  {
    cat: "starters", catLabel: "Закуски", glyph: "🍤",
    items: [
      { id: "ap1", name: "Хрустящие креветки", desc: "Креветки в кляре карри, панировочные сухари, соус унаги и соус спайси", weight: "185 г", price: 450 },
      { id: "ap2", name: "Картофель фри", desc: "Подаётся с сырным соусом", weight: "150 г + соус 30 г", price: 200 }
    ]
  },
  {
    cat: "rolls", catLabel: "Роллы", glyph: "🍣",
    items: [
      { id: "rl1", name: "Ролл «Креветка темпура острый»", desc: "Креветка темпура, творожный сыр, огурец, айсберг, морковь, икра тобико, стружка тунца, соусы спайси и унаги", weight: "280 г / 8 шт", price: 580 },
      { id: "rl2", name: "Ролл с сёмгой и угрём", desc: "Сёмга, угорь, творожный сыр, огурец, айсберг, соус унаги, ореховый соус, кунжут", weight: "270 г / 8 шт", price: 690 },
      { id: "rl3", name: "Ролл «Филадельфия»", desc: "Лосось, творожный сыр, огурец, авокадо, кунжут", weight: "270 г / 8 шт", price: 690 },
      { id: "rl4", name: "Ролл «Калифорния»", desc: "Крабовые палочки, творожный сыр, огурец, авокадо, икра тобико", weight: "260 г / 8 шт", price: 550 },
      { id: "rl5", name: "Ролл «Классический»", desc: "Лосось, сурими, огурец, морковь, айсберг, творожный сыр, сыр чеддер, икра тобико, соусы спайси, ореховый и унаги, кунжут", weight: "290 г / 8 шт", price: 595 }
    ]
  },
  {
    cat: "tempura", catLabel: "Темпура-роллы", glyph: "🔥",
    items: [
      { id: "tp1", name: "Темпура с сурими", desc: "Сурими в хрустящей панировке, огурец, творожный сыр, морковь, айсберг, икра тобико, соусы спайси и унаги", weight: "285 г / 8 шт", price: 540 },
      { id: "tp2", name: "Темпура с лососем", desc: "Лосось в хрустящей панировке, огурец, творожный сыр, морковь, айсберг, икра тобико, соусы спайси и унаги", weight: "285 г / 8 шт", price: 560 },
      { id: "tp3", name: "Темпура с угрём", desc: "Угорь в хрустящей панировке, огурец, творожный сыр, морковь, айсберг, икра тобико, соусы спайси и унаги", weight: "285 г / 8 шт", price: 560 },
      { id: "tp4", name: "Темпура с курицей", desc: "Курица в хрустящей панировке, творожный сыр, огурец, айсберг, морковь, икра тобико, соус унаги", weight: "285 г / 8 шт", price: 535 }
    ]
  },
  {
    cat: "baked", catLabel: "Запечённые роллы", glyph: "🧀",
    items: [
      { id: "bk1", name: "Запечённый с лососем", desc: "Лосось, творожный сыр, огурец, сурими, айсберг, морковь, икра тобико, томат, зелёный лук, сыр гауда, сырный соус, соус унаги", weight: "300 г / 8 шт", price: 600 },
      { id: "bk2", name: "Запечённый с курицей", desc: "Курица, творожный сыр, огурец, сурими, айсберг, морковь, икра тобико, томат, зелёный лук, сыр гауда, сырный соус, соус унаги", weight: "300 г / 8 шт", price: 580 }
    ]
  },
  {
    cat: "maki", catLabel: "Маки", glyph: "🍙",
    items: [
      { id: "mk1", name: "Маки с лососем", desc: "Рис, нори, лосось", weight: "110 г", price: 300 },
      { id: "mk2", name: "Маки с чукой", desc: "Рис, нори, салат чука", weight: "110 г", price: 190 },
      { id: "mk3", name: "Маки с сурими", desc: "Рис, нори, сурими", weight: "110 г", price: 220 },
      { id: "mk4", name: "Маки с угрём", desc: "Рис, нори, угорь, соус унаги, кунжут", weight: "110 г", price: 340 },
      { id: "mk5", name: "Маки с огурцом", desc: "Рис, нори, свежий огурец, кунжут", weight: "110 г", price: 180 }
    ]
  },
  {
    cat: "sushi", catLabel: "Суши и гункан", glyph: "🍱",
    items: [
      { id: "su1", name: "Суши с лососем", desc: "Рис для суши, нори, лосось", weight: "40 г", price: 170 },
      { id: "su2", name: "Суши с угрём", desc: "Рис для суши, нори, угорь, соус унаги, кунжут", weight: "40 г", price: 190 },
      { id: "su3", name: "Гункан с лососем", desc: "Рис, нори, лосось, соус спайси", weight: "45 г", price: 180 },
      { id: "su4", name: "Гункан с чукой", desc: "Рис, нори, салат чука, ореховый соус", weight: "45 г", price: 110 }
    ]
  },
  {
    cat: "poke", catLabel: "Поке", glyph: "🥙",
    items: [
      { id: "pk1", name: "Поке с лососем", desc: "Лосось, рис, эдамаме, салат чука, ананас, томаты черри, маринованный огурец, ореховый соус, соус унаги, кунжутное масло", weight: "360 г", price: 650 },
      { id: "pk2", name: "Поке с креветками", desc: "Креветки в панко, рис, эдамаме, салат чука, ананас, томаты черри, маринованный огурец, ореховый соус, соус унаги, кунжутное масло", weight: "360 г", price: 590 }
    ]
  },
  {
    cat: "soups", catLabel: "Супы", glyph: "🍲",
    items: [
      { id: "sp1", name: "Суп «Том Ям»", desc: "Бульон на лемонграссе, лаймовых листьях и галанганe, креветки, мидии, кальмар, грибы, томаты черри, кинза; с рисом, чили и лаймом", weight: "515 г (суп 400 г + рис 100 г)", price: 670 }
    ]
  },
  {
    cat: "salads", catLabel: "Салаты", glyph: "🥗",
    items: [
      { id: "sl1", name: "Чука салат", desc: "Маринованные водоросли чука, ореховый соус, лимон", weight: "200 г", price: 240 }
    ]
  },
  {
    cat: "drinks", catLabel: "Напитки", glyph: "🥤",
    items: [
      { id: "dr1", name: "Coca-Cola", desc: "", weight: "1 л", price: 140 },
      { id: "dr2", name: "Fuse Tea ромашка", desc: "", weight: "1 л", price: 140 },
      { id: "dr3", name: "Fuse Tea персик", desc: "", weight: "1 л", price: 140 }
    ]
  },
  {
    cat: "sauces", catLabel: "Соусы и добавки", glyph: "🧂",
    items: [
      { id: "sc1", name: "Соевый соус п/ф", desc: "", weight: "30 г", price: 40 },
      { id: "sc2", name: "Ореховый соус", desc: "", weight: "30 г", price: 40 },
      { id: "sc3", name: "Имбирь маринованный", desc: "", weight: "30 г", price: 40 },
      { id: "sc4", name: "Васаби", desc: "", weight: "30 г", price: 30 },
      { id: "sc5", name: "Спайс соус", desc: "", weight: "30 г", price: 45 }
    ]
  },
  {
    cat: "sets", catLabel: "Сеты", glyph: "🎉",
    items: [
      { id: "se1", name: "Сет «Классика»", desc: "Калифорния, Филадельфия, маки с огурцом, маки с лососем", weight: "750 г", price: 1555 },
      { id: "se2", name: "«Любимый сет»", desc: "Запечённый с лососем, темпура с курицей, маки с огурцом, маки с лососем", weight: "805 г", price: 1445 },
      { id: "se3", name: "Сет «Баланс Вкуса»", desc: "Запечённый с курицей, ролл «Классический», суши с лососем, гункан с чукой, суши с угрём, гункан с лососем", weight: "760 г", price: 1675 },
      { id: "se4", name: "Сет «Ассорти»", desc: "Филадельфия, Калифорния, креветка темпура острый, темпура с курицей", weight: "1095 г", price: 2130 },
      { id: "se5", name: "Сет «Вкусняшка»", desc: "Запечённый с курицей, Филадельфия, ролл «Классический»", weight: "860 г", price: 1715 }
    ]
  }
];

/* ==========================================================
   Состояние корзины (сохраняется в localStorage)
   ========================================================== */
let cart = {};
try {
  cart = JSON.parse(localStorage.getItem("tomyam-cart")) || {};
} catch (e) {
  cart = {};
}

function saveCart() {
  localStorage.setItem("tomyam-cart", JSON.stringify(cart));
}

function findItem(id) {
  for (const group of MENU) {
    const found = group.items.find(i => i.id === id);
    if (found) return found;
  }
  return null;
}

function cartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = findItem(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  if (!cart[id]) return;
  cart[id] -= 1;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  updateCartUI();
}

function deleteFromCart(id) {
  delete cart[id];
  saveCart();
  updateCartUI();
}

function clearCart() {
  if (Object.keys(cart).length === 0) return;
  if (!confirm("Очистить корзину? Все добавленные блюда будут удалены.")) return;
  cart = {};
  saveCart();
  updateCartUI();
}

/* ==========================================================
   Рендер меню
   ========================================================== */
const catTabsEl = document.getElementById("catTabs");
const menuGridEl = document.getElementById("menuGrid");
let activeCat = "all";

function buildTabs() {
  const tabs = [{ cat: "all", catLabel: "Всё меню" }, ...MENU];
  catTabsEl.innerHTML = tabs.map(t =>
    `<button class="cat-tab ${t.cat === activeCat ? "active" : ""}" data-cat="${t.cat}">${t.catLabel}</button>`
  ).join("");

  catTabsEl.querySelectorAll(".cat-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCat = btn.dataset.cat;
      buildTabs();
      buildGrid();
    });
  });
}

function moneyFmt(n) {
  return n.toLocaleString("ru-RU") + " " + CONFIG.currency;
}

function buildGrid() {
  const groups = activeCat === "all" ? MENU : MENU.filter(g => g.cat === activeCat);
  let html = "";

  groups.forEach(group => {
    group.items.forEach(item => {
      const qty = cart[item.id] || 0;
      html += `
        <article class="dish-card" data-id="${item.id}">
          <div class="dish-photo photo-slot" data-photo="images/${item.id}.jpg">
            <span class="photo-fallback">images/${item.id}.jpg</span>
            <span class="dish-photo-badge">${group.glyph}</span>
          </div>
          <div class="dish-body">
            <div class="dish-top">
              <p class="dish-name">${item.name}</p>
              <span class="dish-price">${moneyFmt(item.price)}</span>
            </div>
            <p class="dish-desc">${item.desc}</p>
            <span class="dish-weight">${item.weight}</span>
            <div class="dish-bottom">
              <div class="qty-stepper">
                <button class="qty-minus" aria-label="Убрать одну штуку">−</button>
                <span class="qty-value">${qty}</span>
                <button class="qty-plus" aria-label="Добавить одну штуку">+</button>
              </div>
              <button class="add-btn ${qty > 0 ? "in-cart" : ""}">${qty > 0 ? "Добавлено" : "В корзину"}</button>
            </div>
          </div>
        </article>`;
    });
  });

  menuGridEl.innerHTML = html;

  menuGridEl.querySelectorAll(".dish-card").forEach(card => {
    const id = card.dataset.id;
    card.querySelector(".qty-plus").addEventListener("click", () => addToCart(id));
    card.querySelector(".add-btn").addEventListener("click", () => addToCart(id));
    card.querySelector(".qty-minus").addEventListener("click", () => removeFromCart(id));
  });

  loadPhotoSlots(menuGridEl);
}

/* ==========================================================
   Точечное обновление количества на карточках блюд —
   без пересборки всей сетки, чтобы страница не "мигала"
   и не дёргалась при добавлении товара в корзину.
   ========================================================== */
function updateMenuQuantities() {
  menuGridEl.querySelectorAll(".dish-card").forEach(card => {
    const id = card.dataset.id;
    const qty = cart[id] || 0;
    const qtyValueEl = card.querySelector(".qty-value");
    const addBtnEl = card.querySelector(".add-btn");
    if (qtyValueEl) qtyValueEl.textContent = qty;
    if (addBtnEl) {
      addBtnEl.textContent = qty > 0 ? "Добавлено" : "В корзину";
      addBtnEl.classList.toggle("in-cart", qty > 0);
    }
  });
}

function updateCartUI() {
  updateMenuQuantities();
  buildCart();
}

/* ==========================================================
   Фото: если файл существует — показываем его и прячем подпись,
   если нет — оставляем аккуратную заглушку с путём к файлу.
   ========================================================== */
function loadPhotoSlots(scope) {
  scope.querySelectorAll(".photo-slot:not(.photo-checked)").forEach(el => {
    el.classList.add("photo-checked");
    const src = el.dataset.photo;
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url('${src}')`;
      el.classList.add("has-photo");
    };
    img.src = src;
  });
}

/* ==========================================================
   Рендер корзины
   ========================================================== */
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");

function buildCart() {
  const entries = Object.entries(cart);
  cartCountEl.textContent = cartCount();

  if (entries.length === 0) {
    cartEmptyEl.style.display = "block";
    cartItemsEl.style.display = "none";
    cartItemsEl.innerHTML = "";
  } else {
    cartEmptyEl.style.display = "none";
    cartItemsEl.style.display = "flex";
    cartItemsEl.innerHTML = entries.map(([id, qty]) => {
      const item = findItem(id);
      if (!item) return "";
      return `
        <li class="cart-item" data-id="${id}">
          <div>
            <p class="cart-item-name">${item.name}</p>
            <span class="cart-item-line">${qty} × ${moneyFmt(item.price)} = ${moneyFmt(item.price * qty)}</span>
          </div>
          <div class="cart-item-right">
            <div class="qty-stepper">
              <button class="qty-minus" aria-label="Убрать одну штуку">−</button>
              <span class="qty-value">${qty}</span>
              <button class="qty-plus" aria-label="Добавить одну штуку">+</button>
            </div>
            <button class="cart-item-remove" aria-label="Удалить из корзины">&times;</button>
          </div>
        </li>`;
    }).join("");

    cartItemsEl.querySelectorAll(".cart-item").forEach(row => {
      const id = row.dataset.id;
      row.querySelector(".qty-plus").addEventListener("click", () => addToCart(id));
      row.querySelector(".qty-minus").addEventListener("click", () => removeFromCart(id));
      row.querySelector(".cart-item-remove").addEventListener("click", () => deleteFromCart(id));
    });
  }

  const total = cartTotal();
  const deliveryNote = total > 0 && total < CONFIG.freeDeliveryFrom
    ? ` (+${CONFIG.deliveryFee} ${CONFIG.currency} доставка)`
    : "";
  cartTotalEl.textContent = moneyFmt(total) + deliveryNote;
}

function renderAll() {
  buildGrid();
  buildCart();
}

/* ==========================================================
   WhatsApp — сборка сообщения и ссылки
   ========================================================== */
function buildWhatsappLink(message) {
  return `https://wa.me/${CONFIG.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

function buildOrderMessage() {
  const entries = Object.entries(cart);
  const address = document.getElementById("orderAddress").value.trim();
  const comment = document.getElementById("orderComment").value.trim();

  let lines = [`Здравствуйте! Хочу оформить заказ в ${CONFIG.restaurantName}:`, ""];

  entries.forEach(([id, qty]) => {
    const item = findItem(id);
    if (item) lines.push(`• ${item.name} — ${qty} шт. (${moneyFmt(item.price * qty)})`);
  });

  const total = cartTotal();
  lines.push("");
  lines.push(`Итого: ${moneyFmt(total)}`);

  if (total > 0 && total < CONFIG.freeDeliveryFrom) {
    lines.push(`Доставка: ${CONFIG.deliveryFee} ${CONFIG.currency} (бесплатно от ${moneyFmt(CONFIG.freeDeliveryFrom)})`);
  } else if (total > 0) {
    lines.push("Доставка: бесплатно");
  }

  if (address) lines.push(`Адрес: ${address}`);
  if (comment) lines.push(`Комментарий: ${comment}`);

  return lines.join("\n");
}

function setStaticWhatsappLinks() {
  const link = buildWhatsappLink(CONFIG.greetingMessage);
  ["headerWhatsapp", "heroWhatsapp", "floatWhatsapp", "footerWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

document.getElementById("checkoutWhatsapp").addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    alert("Корзина пуста — добавьте блюда перед оформлением заказа.");
    return;
  }
  const message = buildOrderMessage();
  window.open(buildWhatsappLink(message), "_blank", "noopener");
});

/* ==========================================================
   UI: корзина-шторка, мобильное меню
   ========================================================== */
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("cartClear").addEventListener("click", clearCart);
cartOverlay.addEventListener("click", closeCart);

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

/* ==========================================================
   Init
   ========================================================== */
buildTabs();
setStaticWhatsappLinks();
renderAll();
loadPhotoSlots(document);
