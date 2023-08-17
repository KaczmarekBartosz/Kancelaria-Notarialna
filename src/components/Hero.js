import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="intro">
      <div className="hero">
        <p className="hello">Kancelaria Notarialna</p>
        <div className="name">Notariusz Iwona Małczak</div>
        <h2>Profesjonalne usługi notarialne z pasją i doświadczeniem.</h2>
        <p>
          Zapewniamy kompleksową obsługę prawną i notarialną w zakresie
          transakcji nieruchomości, sporządzania aktów notarialnych oraz
          dziedziczenia.
        </p>
        <p>
          Naszym priorytetem jest zapewnienie rzetelnej i profesjonalnej pomocy
          naszym klientom. Jesteśmy gotowi wesprzeć Cię w ważnych decyzjach
          prawnych.
        </p>
        <p>
          Skontaktuj się z nami, aby umówić się na spotkanie lub dowiedzieć się
          więcej o naszych usługach.
        </p>
        <a href="#contact" className="cta-button">
          Skontaktuj się
        </a>
      </div>
    </section>
  );
};
