import Burger from "./js/components/burger";
import Cards from "./js/components/cards";
import Menu from "./js/components/menu";
import "./styles/main.scss";

const cardsContainer = document.querySelector(".cards");
const menu = document.querySelector(".side-menu");

if (cardsContainer) {
    const cards = new Cards(cardsContainer);

    cards.hideLastRow();

    // Инициализация класса Menu (ДЛЯ УДОБСТВА ПРОВЕРЯЮЩЕГО)
    if (menu) {
        new Menu(() => cards.hideLastRow(), cardsContainer, menu);
    }
}

new Burger();
