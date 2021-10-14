const cartOpenBtn = document.querySelector('#cart-open-btn');
const cartCloseBtn = document.querySelector('#cart-close-btn');
const cartExpan = document.querySelector('#cart-expan');
const drawer = document.querySelector('#js--drawer');

document.querySelector('#drawer-toggle-btn').addEventListener('click', () => {
    openSideDrawer();
});

document.querySelector('#js--drawer-close-btn').addEventListener('click', () => {
    toggleSideDrawer();
});

cartOpenBtn.addEventListener('click', () => {
    openCart();
});

cartCloseBtn.addEventListener('click', () => {
    closeCart();
});

document.querySelector('#search').addEventListener('input', (e) => {
    renderSearchResult(e);
});



const openCart = () => {
    cartOpenBtn.style.display = 'none';
    cartExpan.style.display = 'grid';
}

const closeCart = () => {
    cartOpenBtn.style.display = 'block';
    cartExpan.style.display = 'none';
}

const toggleSideDrawer = () => {
    const bodyEl = document.querySelector('body');

    drawer.classList.toggle('drawer-open');
    bodyEl.style.position = bodyEl.style.position === 'sticky' ? 'relative' : 'sticky';
    bodyEl.style.overflow = bodyEl.style.overflow === 'hidden' ? 'visible' : 'hidden';
    bodyEl.style.maxHeight = bodyEl.style.maxHeight === '' ? '100vh' : '';
}

const renderSearchResult = (e) => {
    if(e.target.value){
        document.querySelector('#search-result').style.height = 'auto';
    } else {
        document.querySelector('#search-result').style.height = '0';
    }
} 