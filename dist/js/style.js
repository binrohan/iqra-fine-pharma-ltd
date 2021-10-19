const Popup = (selector) => {
    const _popup = document.querySelector(selector);
    const isVisible = JSON.parse(_popup.dataset.visible);

    const close = () => {
        _popup.dataset.visible = false;
        _popup.style.display = 'none';
    }

    const open = () => {
        _popup.dataset.visible = true;
        _popup.style.display = 'block';
    }

    const toggle = () => {
        if(isVisible){
            close();
        } else {
            open();
        }
    }

    return {
        toggle,
        open, 
        close
    }
}

(() => {
    const cartOpenBtn = document.querySelector('#cart-open-btn');
    const cartCloseBtn = document.querySelector('#cart-close-btn');
    const cartExpan = document.querySelector('#cart-expan');
    const drawer = document.querySelector('#js--drawer');

    document.querySelector('#drawer-toggle-btn').addEventListener('click', () => {
        toggleSideDrawer();
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

    document.querySelector('#search').addEventListener('focus', (e) => {
        renderSearchResult(e);
    })

    document.querySelector('#category-toggle-btn').addEventListener('click', () => {
        showHideCategories();
    });

    document.addEventListener('click', (e) => {
        closePopOver(e.path);
    });

    document.querySelector('#profile').addEventListener('click', (e) => {
        e.preventDefault();
        Popup('#login-pop-up').toggle();
    });

    document.querySelector('#close-registration-pop-up').addEventListener('click', () => {
        Popup('#registration-pop-up').close();
    });

    document.querySelector('#sign-up').addEventListener('click', () => {
        Popup('#registration-pop-up').close();
        Popup('#otp-pop-up').open();
    });

    document.querySelector('#close-otp-pop-up').addEventListener('click', () => {
        Popup('#otp-pop-up').close();
    });

    document.querySelector('#open-login').addEventListener('click', () => {
        Popup('#registration-pop-up').close();
        Popup('#login-pop-up').open();
    });

    document.querySelector('#close-login-pop-up').addEventListener('click', () => {
        Popup('#login-pop-up').close();
    });

    document.querySelector('#open-registation').addEventListener('click', () => {
        Popup('#login-pop-up').close();
        Popup('#registration-pop-up').open();
    })




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
        if (e.target.value) {
            document.querySelector('#search-result').style.height = 'auto';
        } else {
            document.querySelector('#search-result').style.height = '0';
        }
    }

    const showHideCategories = () => {
        categoryBtnAnime();
        toggleCategoryList();
    }

    // close popover 
    // search result, shopping cart, category list
    // when user clicked outside those elements
    const closePopOver = (path) => {

        if (isClickedOutside(path, 'div.nav-bottom__items__btns')) {
            closeCategoryList();
        }

        if (isClickedOutside(path, '.nav-mid__search')) {
            closeSearchResult();
        }

        if (isClickedOutside(path, '.cart')) {
            closeCart();
        }
    }

    const isClickedOutside = (path, selector) => {
        return !path.find((p) => p === document.querySelector(selector));
    }

    const categoryBtnAnime = () => {
        const categoryBtnArrow = document.querySelector('#category-toggle-btn-arrow');
        if (categoryBtnArrow.style.transform !== 'rotate(540deg)') {
            categoryBtnArrow.style.transform = "rotate(540deg)";
        } else {
            categoryBtnArrow.style.transform = "rotate(0deg)";
        }
    }

    const toggleCategoryList = () => {
        document.querySelector('#category-list').classList.toggle('category-list--show');
    }

    const closeCategoryList = () => {
        if (hasClass(document.querySelector('#category-list'), 'category-list--show')) {
            categoryBtnAnime();
            toggleCategoryList();
        }
    }

    const closeSearchResult = () => {
        document.querySelector('#search-result').style.height = '0';
    }

    const hasClass = (el, cls) => {
        return [...el.classList].includes(cls);
    };
})();



