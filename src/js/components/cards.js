/**
 * Класс управления отображением карточек
 */
export default class Cards {
    _container;

    constructor(container) {
        this._container = container;

        this._init();
    }

    /**
     * Скрыть последний ряд карточек, если он неполный
     */
    hideLastRow() {
        // const cards = Array.from(this._container.querySelectorAll(".card"));

        // if (!cards.length) {
        //     return;
        // }

        // cards.forEach((card) => {
        //     if (card.style.display === "none") {
        //         card.style.display = "";
        //     }
        // });

        // const { gap, containerWidth, cardWidth } = this._getSizes(cards[0]);
        // const rowCardsCount = Math.trunc((containerWidth + gap) / (cardWidth + gap));
        
        // if (cards.length <= rowCardsCount) {
        //     return;
        // }

        // const extraCardsCount = cards.length % rowCardsCount;
        
        // for (let i = cards.length - 1; i > cards.length - 1 - extraCardsCount; i--) {
        //     cards[i].style.display = "none";
        // }
    }

    /**
     * Получить размеры контейнера и карточек
     */
    _getSizes(card) {
        const computedStyle = window.getComputedStyle(this._container);
        const gap = parseInt(computedStyle.gap);
        const containerWidth = this._container.getBoundingClientRect().width;
        const cardWidth = card.getBoundingClientRect().width;

        return { gap, containerWidth, cardWidth: Math.trunc(cardWidth) }
    }

    /**
     * Инициализировать обработчики событий
     */
    _init() {
        window.addEventListener("resize", () => this.hideLastRow())
    }
}