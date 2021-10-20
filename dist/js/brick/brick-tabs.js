'use strict';

export class BrickTabs {
    constructor(selector, options = {}){
        this.selector = selector;
        this.options = options;

        this.prevActiveButtonIndex = -1;
        this.currentActiveButtonIndex = this.options.openingTabIndex || 0;
        this.tabsEl = document.querySelector(this.selector);
        this.contents = this.tabsEl.querySelectorAll('.tabs__content');
        this.buttons = this.tabsEl.querySelectorAll('.tabs__button');
        this.tabField = this.tabsEl.querySelector('.tabs__contents');

        this.addEventsInButtons();

        this.addButtonStackPoint(this.options.buttonsStackPoint || 0);

        this.mount(this.options.openingTabIndex || 0);
    }

    addButtonStackPoint(breakPoint){
        const style = document.createElement('STYLE');
        style.innerText = `
            @media screen and (max-width: ${breakPoint}){
                .tabs__buttons{
                    flex-direction: column;
                }

                .tabs__button{
                    width: 100%;
                }
            }
        `;

        this.tabsEl.append(style);
    }

    addEventsInButtons(){
        this.buttons.forEach((button, i) => {
            button.setAttribute('tab-index', i);
            button.addEventListener('click', e => {
                this.mount(e.target.getAttribute('tab-index'));
            });
        });
    }

    clearContents() {
        this.tabField.innerHTML = '';
    }

    showTabContent(i){
        this.clearContents();
        this.tabField.innerHTML = `<div class="tabs__field">${this.contents[i].innerHTML}</div>`;
    }

    setActiveClass(i){
        this.prevActiveButtonIndex = this.currentActiveButtonIndex;
        this.currentActiveButtonIndex = i;
        this.buttons[this.prevActiveButtonIndex].classList.remove('active');
        this.buttons[this.currentActiveButtonIndex].classList.add('active');
    }

    mount(i){
        this.setActiveClass(i || this.currentActiveButtonIndex);
        this.showTabContent(i || this.currentActiveButtonIndex);
    }

    next(){
        this.mount(++this.currentActiveButtonIndex);
    }

    prev(){
        this.mount(--this.currentActiveButtonIndex);
    }
}