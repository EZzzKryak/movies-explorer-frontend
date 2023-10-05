import React, { useRef } from "react";
import "./MenuBurger.css";

function MenuBurger() {
const ref = useRef();
console.log(ref);
  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;

  // Клонируем меню, чтобы задать свои стили для мобильной версии
  const menu = ref.cloneNode(1);

  // При клике на иконку hamb вызываем ф-ию hambHandler
  hamb.addEventListener("click", hambHandler);

  // Выполняем действия при клике ..
  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }
  // Здесь мы рендерим элементы в наш попап
  function renderPopup() {
    popup.appendChild(menu);
  }
  // Код для закрытия меню при нажатии на ссылку
  const links = Array.from(menu.children);
  // Для каждого элемента меню при клике вызываем ф-ию
  links.forEach(link => {
    link.addEventListener("click", closeOnClick);
  });
  // Закрытие попапа при клике на меню
  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }

  return (
    <>
      <nav class="navbar">
        <div class="container">
          <div class="navbar__wrap">
            <div class="hamb">
              <div class="hamb__field" id="hamb">
                <span class="bar"></span> <span class="bar"></span>
                <span class="bar"></span>
              </div>
            </div>
            <a href="#" class="logo" id="logo">
              Logo
            </a>
            <ul class="menu" id="menu" ref={ref}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Benefits</a>
              </li>
              <li>
                <a href="#">Prices</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="popup" id="popup"></div>
    </>
  );
}

export default MenuBurger;
