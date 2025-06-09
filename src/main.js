import Menu from "./js/components/menu";
import "./styles/main.scss";

const cardsContainer = document.querySelector(".cards");
const menu = document.querySelector(".side-menu");

if (cardsContainer && menu) {
    // Инициализация класса Menu (ДЛЯ УДОБСТВА ПРОВЕРЯЮЩЕГО)
    new Menu(cardsContainer, menu);
}
