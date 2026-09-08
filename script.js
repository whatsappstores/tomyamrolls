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
  freeDeliveryFrom: 1500,
  freeDeliveryRadiusKm: 3
};

/* ==========================================================
   МЕНЮ — данные блюд
   Фото: положите файл images/{id}.jpg (например images/rl3.jpg) —
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
      { id: "rl2", name: "Ролл с сёмгой и угрём", desc: "Сёмга, угорь, творожный сыр, огурец, авокадо, соус унаги, кунжут", weight: "270 г / 8 шт", price: 720 },
      { id: "rl3", name: "Ролл «Филадельфия»", desc: "Лосось, творожный сыр, огурец, авокадо, кунжут", weight: "270 г / 8 шт", price: 695 },
      { id: "rl4", name: "Ролл «Калифорния»", desc: "Крабовые палочки, творожный сыр, огурец, авокадо, икра тобико", weight: "260 г / 8 шт", price: 570 },
      { id: "rl5", name: "Ролл «Классический»", desc: "Лосось, сурими, огурец, авокадо, творожный сыр, сыр чеддер, икра тобико, соусы ореховый и унаги, кунжут", weight: "270 г / 8 шт", price: 695 },
      { id: "rl6", name: "Филадельфия классический", desc: "Творожный сыр, огурец, лосось", weight: "250 г", price: 595 },
      { id: "rl7", name: "Ролл с креветкой", desc: "Креветка, соус спайси, икра тобико, авокадо, стружка бонито", weight: "250 г", price: 537 },
      { id: "rl8", name: "Манго эби темпура", desc: "Творожный сыр, манго, креветка темпура, опалённый лосось, соус унаги, кунжут белый", weight: "270 г", price: 718 },
      { id: "rl9", name: "Манго ролл", desc: "Сыр, манго свежий; пюре манго подаётся отдельно, 30 г", weight: "230 г", price: 387 }
    ]
  },
  {
    cat: "tempura", catLabel: "Темпура-роллы", glyph: "🔥",
    items: [
      { id: "tp1", name: "Темпура с сурими", desc: "Сурими в хрустящей панировке, огурец, творожный сыр, икра тобико, соусы спайси и унаги", weight: "280 г / 8 шт", price: 575 },
      { id: "tp2", name: "Темпура с лососем", desc: "Лосось в хрустящей панировке, огурец, творожный сыр, икра тобико, соусы спайси и унаги", weight: "280 г / 8 шт", price: 580 },
      { id: "tp3", name: "Темпура с угрём", desc: "Угорь в хрустящей панировке, огурец, творожный сыр, икра тобико, соусы спайси и унаги", weight: "280 г / 8 шт", price: 593 },
      { id: "tp4", name: "Темпура с курицей", desc: "Курица в хрустящей панировке, творожный сыр, огурец, икра тобико, соус унаги", weight: "280 г / 8 шт", price: 550 }
    ]
  },
  {
    cat: "baked", catLabel: "Запечённые роллы", glyph: "🧀",
    items: [
      { id: "bk1", name: "Запечённый с лососем", desc: "Лосось, творожный сыр, огурец, сурими, икра тобико, зелёный лук, сыр гауда, сырный соус, соус унаги, кунжут белый", weight: "300 г / 8 шт", price: 686 },
      { id: "bk2", name: "Запечённый с курицей", desc: "Курица, творожный сыр, огурец, сурими, икра тобико, зелёный лук, сыр гауда, сырный соус, соус унаги, кунжут белый", weight: "300 г / 8 шт", price: 642 }
    ]
  },
  {
    cat: "hotdogs", catLabel: "Хот-доги", glyph: "🌭",
    items: [
      { id: "hd1", name: "Хот-дог с курицей", desc: "Творожный сыр, икра тобико, манго свежий, помидор, зелёный лук, курица, сырный соус, сыр гауда, соус спайс; соус унаги подаётся отдельно, 30 г", weight: "270 г", price: 667 },
      { id: "hd2", name: "Хот-дог с лососем", desc: "Творожный сыр, икра тобико, манго свежий, помидор, зелёный лук, лосось, сырный соус, сыр гауда, соус спайс; соус унаги подаётся отдельно, 30 г", weight: "270 г", price: 698 }
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
    cat: "soups", catLabel: "Супы", glyph: "🍲",
    items: [
      { id: "sp1", name: "Суп «Том Ям»", desc: "Бульон на лемонграссе, лаймовых листьях и галанганe, креветки, мидии, кальмар, грибы, томаты черри, кинза; с рисом, чили и лаймом", weight: "655 г (суп 500 г + рис 140 г + чили 5 г + лайм 10 г)", price: 695 },
      { id: "sp2", name: "Суп «Том Ям» с лососем", desc: "Бульон на лемонграссе, лаймовых листьях и галанганe, лосось, креветки, мидии, кальмар, грибы, томаты черри, кинза; с рисом, чили и лаймом", weight: "715 г (суп 500 г + рис 140 г + чили 5 г + лайм 10 г)", price: 770 },
      { id: "sp3", name: "Суп «Том Ям» с курицей", desc: "Кокосовый бульон на лемонграссе, лаймовых листьях и галанганe, курица, грибы, томаты черри, кинза; с рисом, чили и лаймом", weight: "655 г (суп 500 г + рис 140 г + чили 5 г + лайм 10 г)", price: 645 }
    ]
  },
  {
    cat: "salads", catLabel: "Салаты", glyph: "🥗",
    items: [
      { id: "sl1", name: "Чука салат", desc: "Маринованные водоросли чука, ореховый соус, лимон", weight: "200 г", price: 240 }
    ]
  },
  {
    cat: "sets", catLabel: "Сеты", glyph: "🎉",
    items: [
      { id: "se1", name: "Сет «Классика»", desc: "Калифорния, Филадельфия, маки с огурцом, маки с лососем + Coca-Cola", weight: "750 г", price: 1795 },
      { id: "se2", name: "«Любимый сет»", desc: "Запечённый с лососем, темпура с курицей, маки с огурцом, маки с лососем + Coca-Cola", weight: "805 г", price: 1766 },
      { id: "se3", name: "Сет «Баланс Вкуса»", desc: "Запечённый с курицей, ролл «Классический», суши с лососем, гункан с чукой, суши с угрём, гункан с лососем + Coca-Cola", weight: "760 г", price: 2037 },
      { id: "se5", name: "Сет «Вкусняшка»", desc: "Запечённый с курицей, Филадельфия, ролл «Классический» + Coca-Cola", weight: "860 г", price: 2082 },
      { id: "se6", name: "Сет с манго", desc: "Манго ролл, Манго эби темпура, ролл с креветкой + Coca-Cola", weight: "750 г", price: 1742 }
    ]
  },
  {
    cat: "drinks", catLabel: "Напитки", glyph: "🥤",
    items: [
      { id: "dr1", name: "Coca-Cola", desc: "", weight: "1 л", price: 140 },
      { id: "dr2", name: "Fuse Tea ромашка", desc: "", weight: "1 л", price: 140 },
      { id: "dr3", name: "Fuse Tea персик", desc: "", weight: "1 л", price: 140 }
    ]
  }
];

/* ==========================================================
   ДОПОЛНИТЕЛЬНО — соусы и добавки.
   Показываются отдельной секцией внизу страницы (не в основных
   вкладках меню), так как часто уже входят в состав роллов и
   сетов — здесь их можно заказать дополнительно при желании.
   ========================================================== */
const EXTRAS = {
  cat: "extras", catLabel: "Дополнительно", glyph: "🧂",
  items: [
    { id: "sc1", name: "Соевый соус п/ф", desc: "", weight: "30 г", price: 40, compact: true },
    { id: "sc2", name: "Ореховый соус", desc: "", weight: "30 г", price: 40, compact: true },
    { id: "sc5", name: "Спайс соус", desc: "", weight: "30 г", price: 45, compact: true },
    { id: "sc3", name: "Имбирь маринованный", desc: "", weight: "30 г", price: 40, compact: true },
    { id: "sc4", name: "Васаби", desc: "", weight: "30 г", price: 30, compact: true }
  ]
};

/* ==========================================================
   АКЦИЯ — выгодное комбо, показывается на видном месте
   отдельным блоком сразу под главным экраном.
   ========================================================== */
const PROMO = {
  cat: "promo", catLabel: "Акция", glyph: "🔥",
  items: [
    { id: "cb1", name: "Выгодное комбо", desc: "Суп «Том Ям» с курицей + Хот-дог с лососем", weight: "655 г + 270 г", price: 995, promo: true }
  ]
};

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
  const extra = EXTRAS.items.find(i => i.id === id);
  if (extra) return extra;
  return PROMO.items.find(i => i.id === id) || null;
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
const extrasGridEl = document.getElementById("extrasGrid");
const promoGridEl = document.getElementById("promoGrid");
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

function renderDishCardHTML(item, glyph) {
  const qty = cart[item.id] || 0;

  if (item.compact) {
    return `
      <article class="dish-card dish-card--compact" data-id="${item.id}">
        <div class="dish-photo dish-photo--compact photo-slot" data-photo="images/${item.id}.jpg">
          <span class="photo-fallback">images/${item.id}.jpg</span>
          <span class="dish-photo-badge">${glyph}</span>
        </div>
        <div class="dish-body dish-body--compact">
          ${item.optional ? `<span class="dish-compact-tag">По желанию</span>` : ""}
          <div class="dish-top">
            <p class="dish-name">${item.name}</p>
            <span class="dish-price">${moneyFmt(item.price)}</span>
          </div>
          ${item.desc ? `<p class="dish-desc">${item.desc}</p>` : ""}
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
  }

  return `
      <article class="dish-card${item.promo ? " dish-card--promo" : ""}" data-id="${item.id}">
        <div class="dish-photo photo-slot" data-photo="images/${item.id}.jpg">
          <span class="photo-fallback">images/${item.id}.jpg</span>
          <span class="dish-photo-badge">${glyph}</span>
          ${item.promo ? `<span class="promo-badge">Акция!</span>` : ""}
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
}

function wireCardEvents(container) {
  container.querySelectorAll(".dish-card").forEach(card => {
    const id = card.dataset.id;
    card.querySelector(".qty-plus").addEventListener("click", (e) => { e.stopPropagation(); addToCart(id); });
    card.querySelector(".add-btn").addEventListener("click", (e) => { e.stopPropagation(); addToCart(id); });
    card.querySelector(".qty-minus").addEventListener("click", (e) => { e.stopPropagation(); removeFromCart(id); });
    card.addEventListener("click", () => openDishModal(id));
  });
  loadPhotoSlots(container);
}

function buildGrid() {
  const groups = activeCat === "all" ? MENU : MENU.filter(g => g.cat === activeCat);
  let html = "";

  groups.forEach(group => {
    group.items.forEach(item => {
      html += renderDishCardHTML(item, group.glyph);
    });
  });

  menuGridEl.innerHTML = html;
  wireCardEvents(menuGridEl);
}

function buildExtrasGrid() {
  if (!extrasGridEl) return;
  const html = EXTRAS.items.map(item => renderDishCardHTML(item, EXTRAS.glyph)).join("");
  extrasGridEl.innerHTML = html;
  wireCardEvents(extrasGridEl);
}

function buildPromoGrid() {
  if (!promoGridEl) return;
  const html = PROMO.items.map(item => renderDishCardHTML(item, PROMO.glyph)).join("");
  promoGridEl.innerHTML = html;
  wireCardEvents(promoGridEl);
}

/* ==========================================================
   Точечное обновление количества на карточках блюд —
   без пересборки всей сетки, чтобы страница не "мигала"
   и не дёргалась при добавлении товара в корзину.
   ========================================================== */
function findGroupGlyph(id) {
  const group = MENU.find(g => g.items.some(i => i.id === id));
  if (group) return group.glyph;
  if (EXTRAS.items.some(i => i.id === id)) return EXTRAS.glyph;
  return PROMO.items.some(i => i.id === id) ? PROMO.glyph : "";
}

function updateMenuQuantities() {
  [menuGridEl, extrasGridEl, promoGridEl].forEach(grid => {
    if (!grid) return;
    grid.querySelectorAll(".dish-card").forEach(card => {
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
  });
  if (currentModalId) updateDishModalQty();
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
  let deliveryNote = "";
  if (total > 0 && total < CONFIG.freeDeliveryFrom) {
    deliveryNote = ` (доставка платная — от ${moneyFmt(CONFIG.freeDeliveryFrom)} бесплатно в пределах ${CONFIG.freeDeliveryRadiusKm} км)`;
  } else if (total >= CONFIG.freeDeliveryFrom) {
    deliveryNote = ` (доставка бесплатно в пределах ${CONFIG.freeDeliveryRadiusKm} км)`;
  }
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
    lines.push(`Доставка: платная (бесплатно от ${moneyFmt(CONFIG.freeDeliveryFrom)} в пределах ${CONFIG.freeDeliveryRadiusKm} км от кухни, уточните стоимость)`);
  } else if (total > 0) {
    lines.push(`Доставка: бесплатно (заказ от ${moneyFmt(CONFIG.freeDeliveryFrom)}, в пределах ${CONFIG.freeDeliveryRadiusKm} км от кухни; за пределами зоны уточните стоимость)`);
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

/* ==========================================================
   UI: модальное окно с полной информацией о блюде
   ========================================================== */
let currentModalId = null;

const dishModal = document.getElementById("dishModal");
const dishModalOverlay = document.getElementById("dishModalOverlay");
const dishModalPhoto = document.getElementById("dishModalPhoto");

function openDishModal(id) {
  const item = findItem(id);
  if (!item) return;
  currentModalId = id;

  document.getElementById("dishModalName").textContent = item.name;
  document.getElementById("dishModalDesc").textContent = item.desc || "";
  document.getElementById("dishModalWeight").textContent = item.weight || "";
  document.getElementById("dishModalPrice").textContent = moneyFmt(item.price);
  document.getElementById("dishModalBadge").textContent = findGroupGlyph(id);

  dishModalPhoto.dataset.photo = `images/${id}.jpg`;
  dishModalPhoto.classList.remove("has-photo");
  dishModalPhoto.classList.remove("photo-checked");
  dishModalPhoto.style.backgroundImage = "";
  document.getElementById("dishModalPhotoFallback").textContent = `images/${id}.jpg`;
  loadPhotoSlots(dishModal);

  updateDishModalQty();

  dishModal.classList.add("open");
  dishModalOverlay.classList.add("open");
}

function closeDishModal() {
  dishModal.classList.remove("open");
  dishModalOverlay.classList.remove("open");
  currentModalId = null;
}

function updateDishModalQty() {
  if (!currentModalId) return;
  const qty = cart[currentModalId] || 0;
  document.getElementById("dishModalQty").textContent = qty;
  const btn = document.getElementById("dishModalAddBtn");
  btn.textContent = qty > 0 ? "Добавлено" : "В корзину";
  btn.classList.toggle("in-cart", qty > 0);
}

document.getElementById("dishModalClose").addEventListener("click", closeDishModal);
dishModalOverlay.addEventListener("click", closeDishModal);
document.getElementById("dishModalPlus").addEventListener("click", () => addToCart(currentModalId));
document.getElementById("dishModalMinus").addEventListener("click", () => removeFromCart(currentModalId));
document.getElementById("dishModalAddBtn").addEventListener("click", () => addToCart(currentModalId));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeDishModal(); closeCart(); }
});

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

/* ==========================================================
   Init
   ========================================================== */
buildTabs();
setStaticWhatsappLinks();
buildExtrasGrid();
buildPromoGrid();
renderAll();
loadPhotoSlots(document);
