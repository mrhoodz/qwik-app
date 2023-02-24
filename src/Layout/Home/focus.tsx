import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_focus.scss?inline";

export default component$(function Focus() {
  const focusPoints = [
    {
      number: "01",
      title: "UI/UX Design",
      subtitle: "The look",
    },

    {
      number: "02",
      title: "Branding",
      subtitle: "The feel",
    },

    {
      number: "03",
      title: "Development",
      subtitle: "The results",
    },
  ];

  useStyles$(styles);

  return (
    <article id="Focus">
      <h2>Focus areas</h2>

      <aside>
        {focusPoints.map((item, index) => (
          <div key={index} class="focus-card">
            <div class="numtitle">{item.number}</div>

            <div class="title"> {item.title} </div>

            <div class="subtitle">{item.subtitle} </div>
          </div>
        ))}
      </aside>

      <p class="p-content">
        I will partner with you to understand and reveal the problems that your
        business has and create a digitally optimized backboned solution for
        you.
      </p>

      <div class="talk-btn">LET'S TALK</div>
    </article>
  );
});
