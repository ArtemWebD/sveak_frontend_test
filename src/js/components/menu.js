/**
 * Класс для управления пунктами меню (ДЛЯ ТЕСТОВ ПРОВЕРЯЮЩИХ)
 */
export default class Menu {
    _callback;
    _cardsContainer;
    _menu;

    constructor(callback, cardsContainer, menu) {
        this._callback = callback;
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
                    this._callback();
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
            <div class="card">
                <h5>1. Very big titleeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h5>
                <p>
                    Small card's content
                </p>
            </div>
        `;

        for (let i = 0; i < count - 1; i++) {
            html += `
                <div class="card">
                    <h5>${i + 2}. Lorem Ipsum</h5>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ad reprehenderit adipisci maiores dolores quae? Repellat voluptates fugit, aliquam ipsam itaque iusto expedita veniam quod quae doloribus quidem accusantium temporibus!
                    </p>
                </div>
            `;
        }

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
                    <svg class="button" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <circle opacity="0.13" cx="11.5" cy="11.5" r="11.5" fill="black"/>
                    </svg>
                </div>
                <div class="side-menu__item__content">
                    <span>Lorem Ipsum</span>
                </div>
            `;

            items.push(item);
        }

        return items;
    }
}