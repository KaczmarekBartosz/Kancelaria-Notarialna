import React from "react";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <h1>
            <a href="/">Kancelaria Notarialna</a>
          </h1>
        </li>
        <li>
          <a href="/">Strona główna</a>
        </li>
        <li>
          <a href="#kancelaria">O Kancelarii</a>
        </li>
        <li>
          <a href="#service">Usługi</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};
