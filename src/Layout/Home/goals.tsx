import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_goals.scss?inline";

export default component$(function goals() {
  useStyles$(styles);

  const goalpoints = [
    {
      number: "01",
      title: "Empower web designers",
      content:
        "When l started web design it took me 4 years to learn web design and over the years lve dedicated my time to teaching all young and aspiring designers how to have a career to. the amazing world of web design.",
    },

    {
      number: "02",
      title: "Digitize Africa",
      content:
        "Realwebsdigital aims to empower African businesses with cutting-edge technology like artificial intelligence and decentralized automated systems. Join our mission to digitize Africa's digital landscape.",
    },
  ];

  return (
    <section id="Goals">
      <div class="subtitle">Here are some of</div>
      <h2>My Goals</h2>

      <article class="thaGoals">
        {goalpoints.map((item, index) => (
          <div class="goal-card">
            <div key={index} class="numtitle">
              {item.number}
            </div>

            <h3 class="title"> {item.title} </h3>

            <p class="p-content">{item.content}</p>

            <div class="percent"> </div>
          </div>
        ))}
      </article>
    </section>
  );
});
