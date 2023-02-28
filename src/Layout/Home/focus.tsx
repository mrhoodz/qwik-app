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
    <article
      window:onLoad$={() => {
        // document.getElementById("#Home")

        console.log(document.getElementById("Focus")?.offsetTop);
      }}
      id="Focus"
    >
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
        <span class="html-only">At RealWebsdigital,</span> I design
        lightning-fast websites that drive business growth and specialize in
        delivering digital solutions that solve your complex business problems.
      </p>

      <div class="talk-btn">LET'S TALK</div>
    </article>
  );
});
