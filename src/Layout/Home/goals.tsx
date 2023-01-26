import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_goals.scss?inline";

export default component$(function goals() {
  useStyles$(styles);

  return (
    <article id="Goals">
      <div class="subtitle">Here are some of</div>
      <h2>My Goals</h2>

      <div class="goal-card">
        <div class="numtitle">01</div>

        <div class="title">Empower web designers</div>

        <div class="p-content">
          When l started web design it took me 4 years to learn web design and
          over the years lve dedicated my time to teaching all young and
          aspiring designers how to have a career to. the amazing world of web
          design.
        </div>

        <div class="percent">  </div>
      </div>
    </article>
  );
});
