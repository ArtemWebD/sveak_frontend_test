/**
 * Класс для управления пунктами меню (ДЛЯ ТЕСТОВ ПРОВЕРЯЮЩИХ)
 */
export default class Menu {
    _cardsContainer;
    _menu;

    constructor(cardsContainer, menu) {
        this._cardsContainer = cardsContainer;
        this._menu = menu;

        this._init();
    }

    /**
     * Инициализация прослушивания события клика по элементам меню
     */
    _init() {
        const items = this._menu.querySelectorAll(".menu-item");

        items.forEach((item) => {
            item.onclick = () => {
                const count = +item.dataset?.count;

                if (!isNaN(+count)) {
                    this._cardsContainer.innerHTML = this._createCards(count);
                } else {
                    const container = this._menu.querySelector(".side-menu__container");
                    const newItems = this._createMenuItems();

                    newItems.forEach((newItem) => container.append(newItem));
                }
            }
        });
    }

    /**
     * Создать html карточек
     * @param {number} count Количество карточек
     * @returns {string}
     */
    _createCards(count) {
        if (count === 0) {
            return "";
        }

        let html = `
            <div class="card" tabindex="0">
                <div class="card__body">
                    <div class="card__image">
                        <picture class="card__picture">
                            <source media="(max-width: 639px)" srcset="public/img_5_600x600.png">
                            <source media="(max-width: 1023px)" srcset="public/img_4_800x800.jpg">
                            <img class="card__picture__img" src="public/img_1.webp" />
                        </picture>
                        <div class="card__image__scroll scroll">
                            <span class="scroll__arrow"></span>
                            <span class="scroll__thumb"></span>
                            <svg class="scroll__icon-container" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <use class="scroll__icon" href="public/icons.svg#hand-index-icon"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="card__content">
                        <h5 class="card__title">1. Тэг picture</h5>
                        <p class="card__text">
                            В данной карточке показано изменение изображений в зависимости от ширины экрана
                        </p>
                    </div>
                </div>
            </div>
        `;

        for (let i = 0; i < count - 1; i++) {
            html += `
                <div class="card" tabindex="0">
                    <div class="card__body">
                        <div class="card__image">
                            <picture class="card__picture">
                                <source media="(max-width: 639px)" srcset="img_5_600x600.png">
                                <source media="(max-width: 1023px)" srcset="img_4_800x800.jpg">
                                <img class="card__picture__img" src="img_1.webp" />
                            </picture>
                            <div class="card__image__scroll scroll">
                                <span class="scroll__arrow"></span>
                                <span class="scroll__thumb"></span>
                                <svg class="scroll__icon-container" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <use class="scroll__icon" href="icons.svg#hand-index-icon"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="card__content">
                            <h5 class="card__title">${i + 2}. Тэг picture</h5>
                            <p class="card__text">
                                В данной карточке показано изменение изображений в зависимости от ширины экрана
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        html += '<div class="cards__close"></div>';

        return html;
    }

    /**
     * Создать массив элементов меню
     * @returns {HTMLElement[]}
     */
    _createMenuItems() {
        let items = [];

        for (let i = 0; i < 20; i++) {
            const item = document.createElement("li");

            item.classList.add("side-menu__item");

            item.innerHTML = `
                <div class="side-menu__item__icon">
                    <svg class="side-menu__item__icon-container" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <use href="icons.svg#circle-icon"></use>
                    </svg>
                </div>
                <div class="side-menu__item__content">
                    <span>What is Lorem Ipsum?</span>
                </div>
            `;

            items.push(item);
        }

        return items;
    }
}