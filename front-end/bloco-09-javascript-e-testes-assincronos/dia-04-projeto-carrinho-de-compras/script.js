const sectionItems = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
const emptyCartBtn = document.querySelector('.empty-cart');
const loadingMsg = document.querySelector('.loading');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const savePrices = (element) => {
  localStorage.setItem('totalPrice', element);
};

const getSavedPrices = () => localStorage.getItem('totalPrice');

const getItemPrice = () => {
  const cartItem = document.querySelectorAll('.cart__item');

  let sum = 0;
  cartItem.forEach((item) => { sum += Number(item.innerText.split('$')[1]); });

  return sum;
};

const sumPrice = () => { totalPrice.innerText = Math.round(getItemPrice() * 100) / 100; };

const cartItemClickListener = ({ target }) => {
  target.remove();
  saveCartItems(cartItems.innerHTML);
  sumPrice();
  savePrices(totalPrice.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemToCart = async ({ target }) => {
  const parent = target.parentElement;
  const itemId = parent.firstChild.innerText;

  const { id, title, price } = await fetchItem(itemId);
  const obj = { sku: id, name: title, salePrice: price };
  cartItems.appendChild(createCartItemElement(obj));
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));

  const addItemsBtn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addItemsBtn.addEventListener('click', async ({ target }) => {
    await addItemToCart({ target });
    saveCartItems(cartItems.innerHTML);
    sumPrice();
    savePrices(totalPrice.innerHTML);
  });

  section.appendChild(addItemsBtn);
  
  return section;
};

const getSearchedItems = async (item) => {
  const { results } = await fetchProducts(item);
  results.forEach(({ id, title, thumbnail }) => {
    const obj = { sku: id, name: title, image: thumbnail };
    sectionItems.appendChild(createProductItemElement(obj));
  });
};

const savedCart = () => {
  cartItems.innerHTML = getSavedCartItems();
  totalPrice.innerHTML = getSavedPrices();
  const cartItem = document.querySelectorAll('.cart__item');

  cartItem.forEach((el) => {
    el.addEventListener('click', cartItemClickListener);
  });
};

const emptyCart = () => {
  cartItems.innerHTML = '';
  totalPrice.innerHTML = '';
};
emptyCartBtn.addEventListener('click', emptyCart);

window.onload = async () => {
  await getSearchedItems('computador');
  savedCart();
  loadingMsg.remove();
};
