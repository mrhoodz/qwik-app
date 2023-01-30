import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_timeline.scss?inline";

export default component$(function timeline() {
  useStyles$(styles);

  return (
    <article id="Timeline">
      <h2>Timeline</h2>

      <aside id="timeline-cards">
        <details class="timeline-item">
          <summary>
            <span>
              <h3>Design research</h3>
              <h2>12 sep - 13 sep</h2>
            </span>

            <span class="phase-btn">PHASE 1</span>
          </summary>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor.
          </p>
        </details>

        <details class="timeline-item">
          <summary>
            <span>
              <h3>Design research</h3>
              <h2>12 sep - 13 sep</h2>
            </span>

            <span class="phase-btn">PHASE 1</span>
          </summary>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor.
          </p>
        </details>


      </aside>

      <div id="time-elapsed">
        <h3>9 DAYS </h3>
        <p>TOTAL TIME ELAPSED</p>
      </div>

      <div id="belief">
        <h3>COZ I BELIEVE </h3>
        <p>FAILING TO PLAN IS PLANNING TO FAIL</p>
      </div>
    </article>
  );
});
