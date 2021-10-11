const cartOpenBtn = document.querySelector('#cart-open-btn');
const cartCloseBtn = document.querySelector('#cart-close-btn');
const cartExpan = document.querySelector('#cart-expan');

cartOpenBtn.addEventListener('click', () => {
    openCart();
});

cartCloseBtn.addEventListener('click', () => {
    closeCart();
});



const openCart = () => {
    cartOpenBtn.style.display = 'none';
    cartExpan.style.display = 'block';
}

const closeCart = () => {
    cartOpenBtn.style.display = 'block';
    cartExpan.style.display = 'none';
}