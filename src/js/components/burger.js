/**
 * Класс управления бургер-меню
 */
export default class Burger {
    constructor() {
        this._init();
    }

    /**
     * Добавить слушатели событий на бургер
     */
    _init() {
        const triggers = document.querySelectorAll(".menu-trigger");

        triggers.forEach((trigger) => 
            trigger.addEventListener("click", this._handleClick)
        );
    }

    /**
     * Обработка события клика по бургеру
     * @param {MouseEvent} event
     */
    _handleClick(event) {
        event.preventDefault();

        const expanded = document.body.getAttribute("aria-expanded") === "true";

        document.body.setAttribute("aria-expanded", !expanded);
    }
}