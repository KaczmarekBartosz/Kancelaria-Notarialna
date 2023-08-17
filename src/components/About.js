import React from "react";
import "./About.css";
import Kancelaria from "./images/about_img.jpg";

export const About = () => {
  return (
    <div className="About">
      <h2>O Kancelarii</h2>
      <div className="info">
        Kancelaria Notarialna Iwony Małczak to miejsce, gdzie doświadczenie,
        profesjonalizm i zaangażowanie spotykają się w obsłudze notarialnej na
        najwyższym poziomie. Nasza misja polega na dostarczaniu klientom
        kompleksowych i rzetelnych usług prawnych, które spełniają najwyższe
        standardy. Z pasją działamy na rzecz naszych klientów, zapewniając im
        wsparcie w kluczowych decyzjach prawnych. Nasza kancelaria specjalizuje
        się w transakcjach nieruchomości, sporządzaniu aktów notarialnych oraz
        dziedziczeniu. Dzięki naszemu doświadczeniu i wiedzy jesteśmy w stanie
        zapewnić Ci kompleksową pomoc i wsparcie na każdym etapie procesu.
        Cenimy sobie indywidualne podejście do każdej sprawy, dlatego możesz być
        pewny/pewna, że Twoje potrzeby zostaną w pełni zrozumiane i odpowiednio
        zrealizowane. Nasza Kancelaria Notarialna to miejsce, w którym Twoje
        interesy są dla nas najważniejsze. Jesteśmy dumni z możliwości służenia
        społeczności lokalnej i pomagania naszym klientom osiągać swoje cele
        prawne. Skontaktuj się z nami, aby umówić się na konsultację lub
        dowiedzieć się więcej o naszych usługach. Czekamy na Ciebie z otwartymi
        ramionami.
        <img src={Kancelaria}></img>
      </div>
      {/* <blockquote>
        <p>
          Big type, even huge type, can be beautiful and useful. But poise is
          usually far&nbsp;more important than size – and poise consists
          primarily of emptiness. Typographically, poise is&nbsp;made
          of&nbsp;white&nbsp;space.
        </p>

        <footer>Robert Bringhurst</footer>
      </blockquote> */}
      >
    </div>
  );
};
