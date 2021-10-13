const cartOpenBtn = document.querySelector('#cart-open-btn');
const cartCloseBtn = document.querySelector('#cart-close-btn');
const cartExpan = document.querySelector('#cart-expan');
const drawer = document.querySelector('#js--drawer');

document.querySelector('#drawer-toggle-btn').addEventListener('click', () => {
    openSideDrawer();
});

document.querySelector('.drawer__categories__category--header__close').addEventListener('click', () => {
    openSideDrawer();
});

cartOpenBtn.addEventListener('click', () => {
    openCart();
});

cartCloseBtn.addEventListener('click', () => {
    closeCart();
});



const openCart = () => {
    cartOpenBtn.style.display = 'none';
    cartExpan.style.display = 'grid';
}

const closeCart = () => {
    cartOpenBtn.style.display = 'block';
    cartExpan.style.display = 'none';
}

const openSideDrawer = () => {
    const bodyEl = document.querySelector('body');

    drawer.classList.toggle('drawer-open');
    bodyEl.style.position = bodyEl.style.position === 'sticky' ? 'relative' : 'sticky';
    bodyEl.style.overflow = bodyEl.style.overflow === 'hidden' ? 'visible' : 'hidden';
    bodyEl.style.maxHeight = bodyEl.style.maxHeight === '' ? '100vh' : '';
}